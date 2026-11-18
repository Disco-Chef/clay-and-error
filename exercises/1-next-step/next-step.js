// A step: { id: 3, name: "Drying", order: 3, isLoss: false }
//
// Suggested variables:
//   current      the step whose id is currentStepId
//   candidates   the steps that come after `current` and are not a loss step
//
// 1. Find `current`. If it doesn't exist, throw the error "Unknown step: <currentStepId>".
// 2. Build `candidates`.
// 3. If `candidates` is empty, return null.
// 4. Otherwise, return the candidate that comes first in the workshop, i.e. the closest one (smallest order).

export function nextStep(steps, currentStepId) {
  throw new Error("Not implemented yet");
}
