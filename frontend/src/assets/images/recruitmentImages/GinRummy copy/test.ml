open OUnit2
(* open Command *)
open Card
open Deckstack
open Playerhand
open State

(********************************************************************
   Here are some helper functions for your testing of set-like lists. 
 ********************************************************************)

(** [cmp_set_like_lists lst1 lst2] compares two lists to see whether
    they are equivalent set-like lists.  That means checking two things.
    First, they must both be {i set-like}, meaning that they do not
    contain any duplicates.  Second, they must contain the same elements,
    though not necessarily in the same order. *)
let cmp_set_like_lists lst1 lst2 =
  let uniq1 = List.sort_uniq compare lst1 in
  let uniq2 = List.sort_uniq compare lst2 in
  List.length lst1 = List.length uniq1
  &&
  List.length lst2 = List.length uniq2
  &&
  uniq1 = uniq2

(** [pp_string s] pretty-prints string [s]. *)
let pp_string s = "\"" ^ s ^ "\""

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

(* These tests demonstrate how to use [cmp_set_like_lists] and 
   [pp_list] to get helpful output from OUnit. *)
let cmp_demo = 
  [
    "order is irrelevant" >:: (fun _ -> 
        assert_equal ~cmp:cmp_set_like_lists ~printer:(pp_list pp_string)
          ["foo"; "bar"] ["bar"; "foo"]);
    (* Uncomment this test to see what happens when a test case fails.
       "duplicates not allowed" >:: (fun _ -> 
        assert_equal ~cmp:cmp_set_like_lists ~printer:(pp_list pp_string)
          ["foo"; "foo"] ["foo"]);
    *)
  ]

(********************************************************************
   End helper functions.
 ********************************************************************)

(* You are welcome to add strings containing JSON here, and use them as the
   basis for unit tests.  Or you can add .json files in this directory and
   use them, too.  Any .json files in this directory will be included
   by [make zip] as part of your CMS submission. *)

let card_tests =
  [

  ]

let c1 = {rank = 1; suit = HEARTS}
let c2 = {rank = 2; suit = CLUBS}
let d = [c1]

let deckstack_pop_test 
    (name : string) 
    (deck: Deckstack.deck)
    (input: Card.card) 
    (expected_output : Card.card) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output (fst (pop (push input deck))))

let deck_compare a b =
  if a.rank > b.rank then 1 else if a.rank < b.rank then -1
  else if a.suit = HEARTS then 1 else if b.suit = HEARTS then -1
  else if a.suit = SPADES then 1 else if b.suit = SPADES then -1
  else if a.suit = CLUBS then 1 else if b.suit = CLUBS then -1 else 0

let deckstack_shuffle_test 
    (name : string) 
    (deck: Deckstack.deck)
    (expected_output : bool) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output 
        (List.sort deck_compare (shuffle deck)
         = List.sort deck_compare deck))

let deckstack_shuffle2_test 
    (name : string) 
    (deck: Deckstack.deck)
    (expected_output : bool) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output 
        (shuffle deck <>  deck))

let deckstack_empty_test 
    (name : string) 
    (deck: Deckstack.deck)
    (expected_output : bool) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output 
        (is_empty deck))

let rec printlst l = 
  match l with
  | h :: t -> string_of_int h.rank ^ ";" ^ printlst t
  | [] -> ""

let rec printlsts ll = 
  match ll with
  | h :: t ->  "[" ^ printlst h ^ "]" ^ ";" ^ printlsts t
  | [] -> ""

let deckstack_intitialhands_test 
    (name : string) 
    (deck : Deckstack.deck)
    (num_players : int)
    (expected_output : Card.card list * Card.card list list) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output (hands deck num_players) )
(* ~printer:printlsts) *)

let deck_a = [
  {rank = 9; suit = DIAMONDS};
  {rank = 10; suit = DIAMONDS};
  {rank = 11; suit = DIAMONDS};
  {rank = 2; suit = DIAMONDS};
  {rank = 3; suit = DIAMONDS};
  {rank = 4; suit = DIAMONDS};
  {rank = 5; suit = DIAMONDS};
  {rank = 9; suit = HEARTS};
  {rank = 3; suit = HEARTS};
  {rank = 10; suit = HEARTS};
  {rank = 4; suit = HEARTS};
  {rank = 11; suit = HEARTS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = HEARTS};
  {rank = 9; suit = SPADES};
  {rank = 3; suit = CLUBS};
  {rank = 10; suit = SPADES};
  {rank = 4; suit = CLUBS};
  {rank = 7; suit = HEARTS};
  {rank = 5; suit = CLUBS};
  {rank = 6; suit = SPADES};
  {rank = 2; suit = CLUBS};
]

let hand1 = [
  {rank = 5; suit = HEARTS};
  {rank = 4; suit = HEARTS};
  {rank = 3; suit = HEARTS};
  {rank = 5; suit = DIAMONDS};
  {rank = 3; suit = DIAMONDS};
  {rank = 11; suit = DIAMONDS};
  {rank = 9; suit = DIAMONDS};
]

let hand2 = [
  {rank = 6; suit = HEARTS};
  {rank = 11; suit = HEARTS};
  {rank = 10; suit = HEARTS};
  {rank = 9; suit = HEARTS};
  {rank = 4; suit = DIAMONDS};
  {rank = 2; suit = DIAMONDS};
  {rank = 10; suit = DIAMONDS};
]

let remains = [
  {rank = 9; suit = SPADES};
  {rank = 3; suit = CLUBS};
  {rank = 10; suit = SPADES};
  {rank = 4; suit = CLUBS};
  {rank = 7; suit = HEARTS};
  {rank = 5; suit = CLUBS};
  {rank = 6; suit = SPADES};
  {rank = 2; suit = CLUBS};
]

let hand3 = [
  {rank = 7; suit = HEARTS};
  {rank = 3; suit = CLUBS};
  {rank = 5; suit = HEARTS};
  {rank = 10; suit = HEARTS};
  {rank = 5; suit = DIAMONDS};
  {rank = 2; suit = DIAMONDS};
  {rank = 9; suit = DIAMONDS};
]

let hand4 = [
  {rank = 5; suit = CLUBS};
  {rank = 10; suit = SPADES};
  {rank = 6; suit = HEARTS};
  {rank = 4; suit = HEARTS};
  {rank = 9; suit = HEARTS};
  {rank = 3; suit = DIAMONDS};
  {rank = 10; suit = DIAMONDS};
]

let hand5 = [
  {rank = 6; suit = SPADES};
  {rank = 4; suit = CLUBS};
  {rank = 9; suit = SPADES};
  {rank = 11; suit = HEARTS};
  {rank = 3; suit = HEARTS};
  {rank = 4; suit = DIAMONDS};
  {rank = 11; suit = DIAMONDS};
]

let deckstack_tests =
  [
    deckstack_pop_test "push and pop" d c2 c2; 

    deckstack_shuffle_test "shuffle" deck_a true;
    deckstack_shuffle_test "shuffle" hand1 true;

    deckstack_shuffle2_test "shuffle2" deck_a true;
    deckstack_shuffle2_test "shuffle3" hand2 true;
    deckstack_shuffle2_test "shuffle4" hand1 true;

    deckstack_empty_test "empty" deck_a false;

    deckstack_intitialhands_test "initial" deck_a 2 (remains, [hand1; hand2]);
    deckstack_intitialhands_test "initial2" deck_a 3 ([c2], [hand3; hand4; hand5]);
  ]

let check_consecutive_cards_test
    (name : string) 
    (cards : Card.card list)
    (expected_output : bool) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output (check_consecutive cards)
    )
let check_same_rank_test
    (name : string) 
    (cards : Card.card list)
    (expected_output : bool) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output (check_same_rank cards)
    )

let check_two_consecutive_groups_same_suit_test
    (name : string) 
    (cards : Card.card list)
    (expected_output : bool) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output (check_two_consecutive_groups_same_suit cards)
    )

let check_two_consecutive_groups_test
    (name : string) 
    (cards : Card.card list)
    (expected_output : bool) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output (check_two_consecutive_groups cards)
    )

let is_winning_hand_test
    (name : string) 
    (cards : Card.card list)
    (expected_output : bool) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output (is_winning_hand cards)
    )

let d1 = [
  {rank = 3; suit = HEARTS};
  {rank = 4; suit = DIAMONDS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = DIAMONDS};
]
let d2 = [
  {rank = 3; suit = HEARTS};
  {rank = 4; suit = HEARTS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = HEARTS};
]
let d3 = [
  {rank = 3; suit = HEARTS};
  {rank = 9; suit = HEARTS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = HEARTS};
]
let d4 = [
  {rank = 9; suit = DIAMONDS};
  {rank = 10; suit = DIAMONDS};
  {rank = 11; suit = DIAMONDS};
  {rank = 12; suit = DIAMONDS};
]
let d5 = [
  {rank = 9; suit = DIAMONDS};
  {rank = 9; suit = HEARTS};
  {rank = 9; suit = CLUBS};
  {rank = 9; suit = SPADES};
]
let d6 = [
  {rank = 9; suit = DIAMONDS};
  {rank = 10; suit = DIAMONDS};
  {rank = 11; suit = DIAMONDS};
  {rank = 2; suit = DIAMONDS};
  {rank = 3; suit = DIAMONDS};
  {rank = 4; suit = DIAMONDS};
  {rank = 5; suit = DIAMONDS};
]
let d7 = [
  {rank = 9; suit = HEARTS};
  {rank = 3; suit = HEARTS};
  {rank = 10; suit = HEARTS};
  {rank = 4; suit = HEARTS};
  {rank = 11; suit = HEARTS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = HEARTS};
]
let d8 = [
  {rank = 9; suit = HEARTS};
  {rank = 3; suit = HEARTS};
  {rank = 10; suit = HEARTS};
  {rank = 4; suit = HEARTS};
  {rank = 7; suit = HEARTS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = HEARTS};
]

let d9 = [
  {rank = 11; suit = HEARTS};
  {rank = 13; suit = HEARTS};
  {rank = 10; suit = HEARTS};
  {rank = 12; suit = HEARTS};
  {rank = 7; suit = HEARTS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = HEARTS};
]
let d10 = [
  {rank = 8; suit = HEARTS};
  {rank = 11; suit = DIAMONDS};
  {rank = 10; suit = DIAMONDS};
  {rank = 12; suit = DIAMONDS};
  {rank = 7; suit = HEARTS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = HEARTS};
]
let d11 = [
  {rank = 4; suit = HEARTS};
  {rank = 5; suit = HEARTS};
  {rank = 6; suit = HEARTS};
  {rank = 7; suit = HEARTS};
  {rank = 8; suit = HEARTS};
  {rank = 9; suit = HEARTS};
  {rank = 10; suit = HEARTS};
]
let d12 = [
  {rank = 4; suit = HEARTS};
  {rank = 5; suit = DIAMONDS};
  {rank = 6; suit = HEARTS};
  {rank = 7; suit = HEARTS};
  {rank = 8; suit = HEARTS};
  {rank = 9; suit = HEARTS};
  {rank = 10; suit = HEARTS};
]
let d13 = [
  {rank = 0; suit = SPADES};
  {rank = 3; suit = SPADES};
  {rank = 11; suit = CLUBS};
  {rank = 10; suit = CLUBS};
  {rank = 2; suit = SPADES};
  {rank = 9; suit = CLUBS};
  {rank = 1; suit = SPADES};
]
let d14 = [
  {rank = 0; suit = CLUBS};
  {rank = 1; suit = CLUBS};
  {rank = 2; suit = SPADES};
  {rank = 7; suit = CLUBS};
  {rank = 8; suit = SPADES};
  {rank = 9; suit = SPADES};
  {rank = 10; suit = SPADES};
]
let d15 = [
  {rank = 9; suit = CLUBS};
  {rank = 10; suit = CLUBS};
  {rank = 9; suit = HEARTS};
  {rank = 11; suit = CLUBS};
  {rank = 12; suit = CLUBS};
  {rank = 9; suit = HEARTS};
  {rank = 9; suit = HEARTS};
]
let d16 = [
  {rank = 9; suit = CLUBS};
  {rank = 10; suit = CLUBS};
  {rank = 9; suit = HEARTS};
  {rank = 7; suit = CLUBS};
  {rank = 8; suit = CLUBS};
  {rank = 9; suit = HEARTS};
  {rank = 9; suit = HEARTS};
]
let d17 = [
  {rank = 9; suit = CLUBS};
  {rank = 12; suit = SPADES};
  {rank = 9; suit = HEARTS};
  {rank = 12; suit = DIAMONDS};
  {rank = 12; suit = CLUBS};
  {rank = 9; suit = SPADES};
  {rank = 9; suit = DIAMONDS};
]
let d18 = [
  {rank = 8; suit = CLUBS};
  {rank = 12; suit = SPADES};
  {rank = 9; suit = HEARTS};
  {rank = 12; suit = DIAMONDS};
  {rank = 12; suit = CLUBS};
  {rank = 9; suit = SPADES};
  {rank = 9; suit = DIAMONDS};
]
let d19 = [
  {rank = 8; suit = CLUBS};
  {rank = 7; suit = CLUBS};
  {rank = 9; suit = CLUBS};
  {rank = 6; suit = CLUBS};
  {rank = 5; suit = CLUBS};
  {rank = 9; suit = SPADES};
  {rank = 9; suit = DIAMONDS};
]
let d20 = [
  {rank = 1; suit = HEARTS};
  {rank = 2; suit = CLUBS};
  {rank = 2; suit = HEARTS};
  {rank = 3; suit = HEARTS};
  {rank = 3; suit = CLUBS};
  {rank = 3; suit = SPADES};
  {rank = 3; suit = DIAMONDS};
]
let is_winning_hand_tests =
  [
    check_consecutive_cards_test "consecutive, not same suit" d1 false;
    check_consecutive_cards_test "consecutive, same suit" d2 true;
    check_consecutive_cards_test "nonconsecutive, same suit" d3 false;
    check_consecutive_cards_test "consecutive, same suit" d4 true;
    check_same_rank_test "same suit, diff rank" d4 false;
    check_same_rank_test "same suit, same rank" d5 true;
    check_same_rank_test "diff suit, same rank" d5 true;
    check_two_consecutive_groups_same_suit_test "valid 3 then 4" d6 true;
    check_two_consecutive_groups_same_suit_test "valid 4 then 3, out of order" d7 true;
    check_two_consecutive_groups_same_suit_test "2 in order, 5 in order" d8 false;
    check_two_consecutive_groups_same_suit_test "valid" d9 true;
    check_two_consecutive_groups_test "valid" d10 true;
    check_two_consecutive_groups_test "valid" d11 true;
    check_two_consecutive_groups_test "invalid" d12 false;
    check_two_consecutive_groups_test "valid" d13 true;
    is_winning_hand_test "winning" d11 true;
    is_winning_hand_test "winning" d10 true;
    is_winning_hand_test "winning" d7 true;
    is_winning_hand_test "not winning" d12 false;
    is_winning_hand_test "not winning" d14 false;
    is_winning_hand_test "winning" d15 true;
    is_winning_hand_test "winning" d16 true;
    is_winning_hand_test "winning" d17 true;
    is_winning_hand_test "not winning" d18 false;
    is_winning_hand_test "not winning" d19 true;
    is_winning_hand_test "not winning" d20 false;
  ]

let playerhand_tests =
  [
    (* TODO: add tests for the State module here *)
  ]


(*
let player1 = {State.PLayer.hand = {Playerhand.deck = hand1;};name = "susie"}


let state1 = {  
player_turn = {"susie"};
  discard_deck : Deckstack.deck;
  stockpile: Deckstack.deck;
  players: player list;
  winner : result (* player's name  *)
}


let discard_test
    (name : string) 
    (state : State.t)
    (topcard : Card.card)
    (expected_output : State.t) : test = 
  name >:: (fun _ -> 
      assert_equal expected_output (discard state topcard))



let state_test = 
  [

  ]
*)

let suite =
  "test suite for A2"  >::: List.flatten [
    card_tests;
    deckstack_tests;
    playerhand_tests;
    is_winning_hand_tests;
  ]

let _ = run_test_tt_main suite
