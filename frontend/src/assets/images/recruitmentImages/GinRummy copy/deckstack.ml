(**Deckstack module*)
open Card

type deck = Card.card list 

(* turns deck from list to stack *)
(* let create_stack d = 
   let rev = List.rev d in
   let s = Stack.create in
   let rec form_stack rev s = 
    match rev with 
    | [] -> s
    | h :: t -> form_stack t Stack.push h s  *)

(* possibility *)
let pop = function 
  | [] -> failwith "Empty"
  | h :: t -> (h, t)

(* pushes card c onto top of deck d *)
let push c d = 
  c :: d

(* peeks at value of top card of deck d (used for face up pile) *)
(* let peek d = Stack.peek c d  *)
let peek d = 
  match d with 
  | [] -> failwith "Empty"
  | h :: t -> print_card h

(* checks if deck is empty (for stock pile) *)
let is_empty d = 
  d = []

(* randomly shuffles deck d *)
let shuffle d = 
  Random.self_init();
  let rand_assign = List.map (fun x -> (Random.bits(), x)) d in 
  let sorted = List.sort compare rand_assign in 
  List.map (fun (z, y) -> y) sorted

let rec create n lsts =
  match n with 
  | 1 -> lsts
  | x -> create (n - 1) ([] :: lsts)

(* let rec split lsts new_lsts d num_players =
   match lsts with 
   | [] -> d :: new_lsts
   | h :: t -> if List.length t > 0 && List.length h < 7 then 
      let change = (push (fst (pop d)) h) in
      change :: split t (change :: t) (snd (pop d)) num_players
    else if List.length t = 0 && List.length h < 7 then 
      let change2 = (push (fst (pop d)) h) in
      change2 :: split new_lsts (change2 :: t) (snd (pop d)) num_players  
    else split t new_lsts d num_players *)

let rec find_min lsts min min_lst =
  match lsts with 
  | [] -> min_lst
  | h :: t -> if List.length h < min then find_min t (List.length h) h 
    else find_min t min min_lst

let rec prepend el lsts min = 
  match lsts with 
  | h :: t -> if h = min && List.length h < 7 then (el :: min) :: t 
    else h :: (prepend el t min)
  | [] -> lsts 

let rec split d lsts num_players deck_size =
  let min = find_min lsts max_int [] in
  match d with
  | h :: t -> if deck_size - (7 * num_players) - 1 < List.length t  
    then split t (prepend h lsts min) num_players deck_size else (d, lsts)
  | [] -> ([], [])

(* tuple where second element is a list containing each player's initial hand 
   of 7 cards and first element is the remaining deck after dealing *)
let hands d num_players =
  let lst = [] in
  let lsts = create num_players [lst] in
  split d lsts num_players (List.length d)


