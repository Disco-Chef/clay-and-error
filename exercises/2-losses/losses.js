// A ticket: { id: 12, piece: "Bowl", history: ["To do", "Shaping", "Drying", "Loss"] }
// `history` lists the steps the piece went through, oldest first.
//
// Returns how many pieces were lost at each step, for example:
//   { "Drying": 2, "Bisque firing": 1 }
//
// The rules:
// - A piece is lost when the last step of its history is "Loss".
// - It broke at the step just before "Loss".
// - If there is no step before "Loss", count it under "Unknown".
// - Pieces that were not lost are not counted.

// Your approach, before the code:
//

export function lossesByStep(tickets) {
  throw new Error("Not implemented yet");
}
