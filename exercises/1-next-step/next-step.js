// A step: { id: 3, name: "Drying", order: 3, isLoss: false }
//
// FUNCTION nextStep(steps, currentStepId)
//   current ← the step in `steps` whose id is currentStepId
//   IF current does not exist
//     THROW an error "Unknown step: <currentStepId>"
//   candidates ← the steps whose order is greater than current.order
//                AND which are not a loss step
//   IF candidates is empty
//     RETURN null
//   RETURN the candidate with the smallest order

export function nextStep(steps, currentStepId) {
  throw new Error("Not implemented yet");
}
