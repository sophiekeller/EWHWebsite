open Playerhand
open Deckstack
open Card
open ANSITerminal

type player = {
  hand : Playerhand.deck;
  name : string;
}

type result = Some of string | None

type t = {
  player_turn : player;
  discard_deck : Deckstack.deck;
  stockpile: Deckstack.deck;
  players: player list;
  winner : result (* player's name  *)
}

(** [pp_list pp_elt lst] pretty-prints list [lst], using [pp_elt]
    to pretty-print each element of [lst]. *)
let pp_list pp_elt lst =
  let pp_elts lst =
    let rec loop n acc = function
      | [] -> acc
      | [h] -> acc ^ pp_elt h
      | h1 :: (h2 :: t as t') ->
        if n = 100 then acc ^ "..."  (* stop printing long list *)
        else loop (n + 1) (acc ^ (pp_elt h1) ^ "; ") t'
    in loop 0 "" lst
  in "[" ^ pp_elts lst ^ "]"

let rec get_cards s num res =
  match num with
  | 0 -> res
  | _ -> get_cards s (num - 1) ({rank = num ; suit = s} :: res)

let standard_deck =
  (get_cards HEARTS 13 [])@(get_cards SPADES 13 [])@
  (get_cards DIAMONDS 13 [])@(get_cards CLUBS 13 [])

let rec make_play names decks result = 
  match (names, decks) with
  | (h_n::t_n, h_d::t_d) -> make_play t_n t_d ({hand = h_d; name = h_n}::result)
  | (_,_) -> result


let rec check_init_hands players =
  match players with 
  | [] -> ()
  | h :: t -> if (is_winning_hand h.hand) 
    then let () = print_endline(h.name^" is the winner. Lucky Draw!") in exit 0 
    else check_init_hands t

let intialize_game (names: string list) =
  let stock = shuffle standard_deck in

  let decks = hands stock 2 in
  let remain_deck = fst decks in
  let popped_deck = pop remain_deck in
  let dis = push (fst popped_deck) [] in
  let new_stock = snd popped_deck in

  (* let popped_deck = pop stock in *)
  (* let dis = push (fst popped_deck) [] in  *)
  (* let decks = hands (snd popped_deck) 2 in *)
  let players_init = make_play names (snd decks) [] in
  let () = check_init_hands players_init in
  {
    player_turn = List.nth players_init 0;
    discard_deck = dis;
    (* stockpile = fst decks; *)
    stockpile = new_stock;
    players = players_init;
    winner = None;

  }


let rec edit_players players person new_hand =
  List.map (fun x -> if x = person then {hand=new_hand; name= x.name}
             else x) players
(* match players with
   | [] -> failwith ("Player does not exist")
   | h::t -> if h = person then t@{hand=new_hand; name=h.name}::result else 
    edit_players t person new_hand (h::result) *)

let rec get_new_player players name =
  match players with
  | [] -> raise (Failure "Not found")
  | h::t -> if h.name = name then h else get_new_player t name

let discard st card =
  let new_player_hand = remove_card card st.player_turn.hand in
  let new_players = edit_players st.players st.player_turn new_player_hand in
  {
    st with discard_deck = push card st.discard_deck; 
            players = new_players;
            player_turn = get_new_player new_players st.player_turn.name
  }


let draw_from_discard st =
  let popped_deck = pop st.discard_deck in
  let new_player_hand = (fst popped_deck)::(st.player_turn.hand) in
  let new_players = edit_players st.players st.player_turn new_player_hand in
  {st with discard_deck = snd popped_deck; 
           players = new_players; player_turn = get_new_player new_players st.player_turn.name} 

let draw_from_stockpile st =
  let popped_deck = pop st.stockpile in
  let new_player_hand = (fst popped_deck)::(st.player_turn.hand) in
  let new_players = edit_players st.players st.player_turn new_player_hand in
  {st with stockpile = snd popped_deck; 
           players = new_players; player_turn = get_new_player new_players st.player_turn.name } 

let reset_deck st =
  if is_empty st.stockpile then
    let new_stock = shuffle st.discard_deck in
    let popped_deck = pop new_stock in
    let new_discard = push (fst popped_deck) [] in
    {st with discard_deck = new_discard; stockpile = snd popped_deck}
  else st

let rec player_draw d st =
  print_endline "Your cards currently are: ";
  print_all_cards st.player_turn.hand;
  print_endline("What would you like to do?\n
                1. Draw from stockpile\n
                2. Take the top card on the discard pile\n
                The top card on the discard pile is: \n");
  peek d; 
  print_endline("\nEnter the number of your choice: ");
  match read_int_opt() with
  | Some 1 -> draw_from_stockpile st
  | Some 2 -> draw_from_discard st
  | _ ->begin
      print_endline("That's not a possible move. Do you want to quit? Type YES to quit or anything else to keep playing");
      let x = read_line() in if x = "YES" then let () = print_endline("GAME OVER. NO WINNER") 
        in exit 0  else erase Screen;
      player_draw d st
    end

let rec print_num_options cards num =
  match cards with
  | [] -> print_endline(""); ()
  | h::t -> print_endline(string_of_int num^". "); print_card h; 
    print_num_options t (num + 1)

let rec player_cards cards st =
  print_endline("Your Cards are: ");
  print_all_cards cards; 
  print_endline("What card would you like to discard? ");
  (*print_num_options cards 1;*)
  print_all_cards_nums cards;
  print_endline("Enter the number of your choice: ");
  match read_int_opt() with
  | None -> erase Screen; print_endline("Invalid move. Try again.");  player_cards cards st
  | Some x -> begin if x > 8 || x < 1 then  let () = erase Screen; print_endline("Invalid move. Try again.");  in player_cards cards st 
      else discard st (List.nth cards (x-1)) end
(* let new_deck = remove_card (List.nth cards (x-1)) cards in
   {st with players = edit_players st.players st.player_turn new_deck }  *)

let rec find_new_index_player p players ind =
  match players with 
  | [] -> raise (Failure "Not Found")
  | h :: t -> if h = p then ((ind + 1) mod List.length players )
    else find_new_index_player p t (ind + 1)

let player_turn st =
  erase Screen;
  print_endline ("\n"^st.player_turn.name ^ " it is your turn! \n");
  let check_reset_st = reset_deck st in
  let new_st = player_draw check_reset_st.discard_deck check_reset_st in
  let make_move_state = player_cards new_st.player_turn.hand new_st in
  let determine_winner = is_winning_hand make_move_state.player_turn.hand in
  let ind = find_new_index_player make_move_state.player_turn make_move_state.players 0 in 
  if determine_winner = false then 
    {make_move_state with player_turn = List.nth make_move_state.players ind}
  else {make_move_state with winner = Some make_move_state.player_turn.name}

let get_winner st =
  st.winner