//# examples/02/04/index.test.ts
import { add } from ".";

test("50 + 50 は 100", () => {
  expect(add(50, 50)).toBe(100);
});
test("70 + 80 は 100", () => {
  expect(add(70, 80)).toBe(100);
});

// test("...", () => {
//   expect(sub(51, 50)).toBe(...);
// });
// test("...", () => {
//   expect(sub(70, 80)).toBe(...);
// });
