(** *)

type suit = HEARTS | CLUBS | SPADES | DIAMONDS
(* 1= ACE ... 11= Jack, 12= Queen, 13 = King *)
type rank = int
type card = {
  rank : rank;
  suit: suit;
}

(** [print_card card] prints [card] in the console*)
val print_card : card -> unit

(** [print_all_cards cards] prints all cards in [cards]*)
val print_all_cards: card list -> unit

val print_all_cards_nums: card list -> unit