import { test } from "node:test";
import assert from "node:assert/strict";
import { nextStep } from "./next-step.js";

// Deliberately shuffled, and with gaps in the order (no 4, no 6).
const workshopSteps = () => [
  { id: 7, name: "Glaze firing", order: 7, isLoss: false },
  { id: 1, name: "To do", order: 1, isLoss: false },
  { id: 9, name: "Loss", order: 9, isLoss: true },
  { id: 3, name: "Drying", order: 3, isLoss: false },
  { id: 2, name: "Shaping", order: 2, isLoss: false },
  { id: 5, name: "Bisque firing", order: 5, isLoss: false },
];

test("moves from Shaping to Drying", () => {
  assert.equal(nextStep(workshopSteps(), 2).name, "Drying");
});

test("skips gaps in the numbering", () => {
  assert.equal(nextStep(workshopSteps(), 3).name, "Bisque firing");
});

test("never offers the Loss step as the next step", () => {
  assert.equal(nextStep(workshopSteps(), 7), null);
});

test("throws when the current step does not exist", () => {
  assert.throws(() => nextStep(workshopSteps(), 42), /Unknown step: 42/);
});

test("accepts an id received as text (HTML form, drag and drop)", () => {
  assert.equal(nextStep(workshopSteps(), "1").name, "Shaping");
});

test("does not modify the array it receives", () => {
  const steps = workshopSteps();
  nextStep(steps, 1);
  assert.deepEqual(steps, workshopSteps());
});
