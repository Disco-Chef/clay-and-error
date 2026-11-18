# Clay and error 🏺

A small technical interview kata. The setting: a pottery workshop that tracks its
pieces through each production step (shaping, drying, firing…).

There is no trap in the setup, and you don't need to finish everything.
What matters is **how you think**: say out loud what you're thinking, what you're
trying, and what surprises you.

## Setup

All you need is [Node.js](https://nodejs.org) 20 or later. Nothing to install.

```bash
git clone <this-repo-url>
cd clay-and-error
node --version   # v20 or later
npm test         # runs every test (some fail at first, that's expected)
```

Each exercise has its own command: `npm run test:1`, `npm run test:2`, etc.

## Exercise 0: before you start

1. Create a branch for your work, and tell us why you name it that way: which
   convention you follow, and what it's for in a team.
2. Commit at the end of each exercise, with a message that will still mean something
   to whoever reads your work six months from now.

## Exercise 1: the next step

📁 `exercises/1-next-step/`

When a piece is ready, it moves on to the next step. The pseudo-code is already
written in `next-step.js`: turn it into working code.

Run `npm run test:1` often. If a test fails when you thought you were done, read
its message carefully: it's telling you something about real-world data.

## Exercise 2: where do things break?

📁 `exercises/2-losses/`

Pat Terry, who runs the workshop, wants to know **at which step** pieces break,
to know what to improve first.

Each ticket keeps the history of the steps the piece went through. When a piece
breaks, its last step is `"Loss"`. So the step where it broke is the one just before.

**Before writing any code**, explain your approach: out loud, in a comment or in
pseudo-code. Only then, implement `lossesByStep` (`npm run test:2`). The exact
rules are at the top of `losses.js`.

## Exercise 3: bug hunt

📁 `exercises/3-bug-hunt/`

`validateOrder` checks an order before it's saved. It returns a list of error
messages; an empty list means the order is valid. The business rules:

| Field | Rule |
|---|---|
| `customerName` | required, not only spaces, 100 characters maximum |
| `pieces` | at least one line |
| `quantity` (on each line) | a whole number, between 1 and 50 inclusive |

All the tests pass… and yet the code has several bugs.

1. **Without reading `validate-order.js`**, list the test cases you would run: a table
   or Gherkin scenarios, on paper or in a comment at the top of the test file.
2. Add them to `validate-order.test.js`, below the existing tests. A new test that
   fails has found a bug. (The existing tests show the exact error messages.)
3. Fix `validate-order.js` until every test passes.

## Exercise 4: tidy-up

📁 `exercises/4-tidy-up/`

`order-status.js` works (the tests pass), but nobody dares touch it.
Make it readable for the next person **without changing its behaviour**:

- don't change what the tests expect;
- run `npm run test:4` after each small change: the tests must stay green throughout;
- you can rename the function, as long as you update the import in the test file.

Bonus question: reading the tests, is there a business rule that looks odd to you?
Don't change it in the code: tell us what you would do about it.
