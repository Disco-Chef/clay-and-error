// An order: { customerName: "Terry Cotta", pieces: [{ piece: "Bowl", quantity: 4 }] }
// Returns the list of errors. Empty list = valid order.

export function validateOrder(order) {
  const errors = [];

  if (order.customerName === "") {
    errors.push("Customer name is required");
  } else if (order.customerName.length > 101) {
    errors.push("Customer name is 100 characters maximum");
  }

  if (!order.pieces || order.pieces.length === 0) {
    errors.push("An order needs at least one piece");
  } else {
    for (const line of order.pieces) {
      if (line.quantity < 0 || line.quantity > 50) {
        errors.push(`Invalid quantity for ${line.piece}: between 1 and 50`);
      }
    }
  }

  return errors;
}
