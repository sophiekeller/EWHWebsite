(**Module for Card*)
open Format
type suit = HEARTS | CLUBS | SPADES | DIAMONDS
(* 1= ACE ... 11= Jack, 12= Queen, 13 = King *)
type rank = int

type card = {
  rank : rank;
  suit: suit;
}

let get_suit_string s =
  match s with
  |HEARTS -> "<3"
  |CLUBS -> "-3"
  |SPADES -> "-<"
  |DIAMONDS -> "<>"

let get_rank_string r =
  if r > 1 && r < 11 then string_of_int r else
    match r with
    | 1 -> "A"
    | 11 -> "J"
    | 12 -> "Q"
    | _ -> "K"


let print_card c =
  let suit_string = get_suit_string c.suit in
  let rank_string = get_rank_string c.rank in
  print_endline " -------";
  print_endline ("|"^suit_string^"     |");
  print_endline "|       |";
  if String.length rank_string = 2 then print_endline ("|  "^rank_string^"   |")
  else print_endline ("|   "^rank_string^"   |");
  print_endline "|       |";
  print_endline ("|     "^suit_string^"|");
  print_endline " -------"


let print_string_list c num =
  let suit_string = get_suit_string c.suit in
  let rank_string = get_rank_string c.rank in
  [" ------- "; "|"^suit_string^"     |"; "|       |"; 
   if String.length rank_string = 2 then "|  "^rank_string^"   |"
   else "|   "^rank_string^"   |";
   "|       |"; "|     "^suit_string^"|"; " ------- ";]

let print_string_list_num c num =
  let suit_string = get_suit_string c.suit in
  let rank_string = get_rank_string c.rank in
  [string_of_int num^". ------- "; "  |"^suit_string^"     |"; "  |       |"; if String.length rank_string = 2 then "  |  "^rank_string^"   |"
   else "  |   "^rank_string^"   |";
   "  |       |"; "  |     "^suit_string^"|"; "   ------- ";]

let rec new_result card_string result res num=
  match (card_string, result) with
  |([], []) -> if num mod 2 = 0 then List.rev res else res
  | (h_c::t_c, h_r::t_r) -> new_result t_c t_r ((h_c^"  "^h_r)::res) (num + 1)
  |(h_c::t_c, _) -> new_result t_c result (h_c::res) (num + 1)
  | (_,_) -> res

let rec make_prints c result f num = 
  match c with 
  | [] -> result
  | h :: t -> begin let res = f h num in
      let new_result = new_result res result [] 1 in 
      make_prints t new_result f (num - 1)
    end

let rec print_all c_list num =
  match c_list with
  |[] -> ()
  |h::t -> print_endline(h); (print_all t (num + 1))  


let print_all_cards c_deck =
  let to_print = make_prints c_deck [] print_string_list 1 in
  print_all to_print 1

let print_all_cards_nums c_deck =
  let to_print = make_prints c_deck [] print_string_list_num 8 in
  print_all to_print 1