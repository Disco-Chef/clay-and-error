import { test } from "node:test";
import assert from "node:assert/strict";
import { calc } from "./order-status.js";

test("an order with no tickets is to do", () => {
  assert.equal(calc([]), "to_do");
});

test("an order where no piece has started is to do", () => {
  assert.equal(calc([{ step: "To do" }, { step: "To do" }]), "to_do");
});

test("an order where one piece has started is in progress", () => {
  assert.equal(calc([{ step: "To do" }, { step: "Drying" }]), "in_progress");
});

test("an order where every piece is finished is done", () => {
  assert.equal(calc([{ step: "Done" }, { step: "Done" }]), "done");
});

test("an order where every piece broke is done", () => {
  assert.equal(calc([{ step: "Loss" }, { step: "Loss" }]), "done");
});

test("one finished piece and one broken piece: the order is done", () => {
  assert.equal(calc([{ step: "Done" }, { step: "Loss" }]), "done");
});
