//# examples/02/02/index.test.ts
import { add } from ".";

test("add: 1 + 2 は 3", () => {
  expect(add(1, 2)).toBe(3);
});
