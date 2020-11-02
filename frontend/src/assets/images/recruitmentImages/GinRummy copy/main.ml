open State
(** [play_game f] starts the adventure in file [f]. *)

let rec play_turn state =
  let next_state = player_turn state in 
  match get_winner next_state with 
  | None -> play_turn next_state
  | Some winner -> print_string ("Congrats, " ^ winner ^ ", you've won!")


let init_game first second = 
  let state = intialize_game [first;second] in 
  play_turn state 

(** [main ()] prompts for the game to play, then starts it. *)
let main () =
  ANSITerminal.(print_string [red]
                  "\n\nWelcome to Gin Rummy.\n");
  print_endline "Please enter the name of your first player.\n";
  print_string  "> ";
  match read_line () with
  | exception End_of_file -> ()
  | first_name -> 
    let first = first_name in 
    print_endline "Please enter the name of your second player.\n";
    print_string  "> ";
    match read_line () with
    | exception End_of_file -> () 
    | second_name -> let second = second_name in init_game first second


(* Execute the game engine. *)
let () = main ()
