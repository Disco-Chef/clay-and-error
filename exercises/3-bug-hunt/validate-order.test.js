import { test } from "node:test";
import assert from "node:assert/strict";
import { validateOrder } from "./validate-order.js";

test("a correct order has no errors", () => {
  const order = { customerName: "Terry Cotta", pieces: [{ piece: "Bowl", quantity: 4 }] };
  assert.deepEqual(validateOrder(order), []);
});

test("rejects an empty customer name", () => {
  const order = { customerName: "", pieces: [{ piece: "Bowl", quantity: 4 }] };
  assert.deepEqual(validateOrder(order), ["Customer name is required"]);
});

test("rejects an order with no pieces", () => {
  const order = { customerName: "Kiln Eastwood", pieces: [] };
  assert.deepEqual(validateOrder(order), ["An order needs at least one piece"]);
});

test("rejects a quantity that is too large", () => {
  const order = { customerName: "Wheel Smith", pieces: [{ piece: "Mug", quantity: 99 }] };
  assert.deepEqual(validateOrder(order), ["Invalid quantity for Mug: between 1 and 50"]);
});

// Your turn: add the missing cases here.
