(**Deck mli*)
open Card

type deck = Card.card list 

(** [shuffle deck] is a list containing the elements of [deck] in a different, 
    random order *)
val shuffle : deck -> deck

(** [pop deck] is a tuple of the first element of [deck] and [deck] with its 
    first element removed *)
val pop : deck -> (Card.card * Card.card list)

(** [push card deck] is [deck] with [card] added to its front *)
val push : Card.card -> deck -> deck

(** [peek deck] prints the first card in deck [deck] *)
val peek : deck -> unit

(** [is_empty deck] is True if the deck is empty and False if there is at least
    one card element. *)
val is_empty : deck -> bool

(** [hands deck num_players] is tuple where the first element is the remaining 
    [deck] after dealing 7 cards (removing 7 elements) each to [num_players] 
    players and the second element is a double list of each player's initial 
    hand of 7 cards *)
val hands : deck -> int -> (Card.card list * Card.card list list)