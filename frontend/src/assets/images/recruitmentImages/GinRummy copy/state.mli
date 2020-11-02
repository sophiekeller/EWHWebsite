type t

type result = Some of string | None

(**[intialize_game names] is the a state record representing a new game with one 
   player for each player_name in [names]*) 
val intialize_game: string list -> t 

(**[discard state card] is the updated version of state [state] once the 
   current player according to [state] has discarded [card] in state *) 
val discard : t -> Card.card -> t

(**[draw_from_dicard state] is the updated version of state [state] once the 
   current player according to [state] has drawn one card from the discard pile. *) 
val draw_from_discard: t -> t

(**[draw_from_stockpile state] is the updated version of state [state] once the 
   current player according to [state] has drawn one card from the stockpile . *) 
val draw_from_stockpile: t -> t

(**[reset_deck state] is the updated version of state [state] once the discard 
   deck has been reshuffled and emptied and the stockpile is refilled. *) 
val reset_deck: t -> t

(**[player_turn state] is the updated version of state [state] once one turn has
   been executed by the current player according to [state]*) 
val player_turn: t -> t
(*check is winner, if it is  *)
(*change who's turn it is, mod when change*)

(**[get_winner state] is the winner of the game represented by [state], if there
   is no winner, then None*) 
val get_winner: t -> result