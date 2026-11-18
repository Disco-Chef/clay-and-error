import { test } from "node:test";
import assert from "node:assert/strict";
import { lossesByStep } from "./losses.js";

test("no tickets, no losses", () => {
  assert.deepEqual(lossesByStep([]), {});
});

test("ignores pieces that did not break", () => {
  const tickets = [
    { id: 1, piece: "Vase", history: ["To do", "Shaping", "Drying", "Done"] },
    { id: 2, piece: "Mug", history: ["To do", "Shaping"] },
  ];
  assert.deepEqual(lossesByStep(tickets), {});
});

test("counts the step just before the loss", () => {
  const tickets = [
    { id: 1, piece: "Bowl", history: ["To do", "Shaping", "Drying", "Loss"] },
    { id: 2, piece: "Plate", history: ["To do", "Shaping", "Drying", "Loss"] },
    { id: 3, piece: "Vase", history: ["To do", "Shaping", "Drying", "Bisque firing", "Loss"] },
    { id: 4, piece: "Mug", history: ["To do", "Shaping", "Drying", "Done"] },
  ];
  assert.deepEqual(lossesByStep(tickets), { Drying: 2, "Bisque firing": 1 });
});

test("a lost piece with no history is filed under « Unknown »", () => {
  const tickets = [{ id: 1, piece: "Bowl", history: ["Loss"] }];
  assert.deepEqual(lossesByStep(tickets), { Unknown: 1 });
});
