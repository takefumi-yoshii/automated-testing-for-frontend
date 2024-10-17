//# examples/02/04/index.test.ts
import { add } from ".";

test("範囲外の値を与えた場合、例外がスローされること", () => {
  expect(() => add(-10, 110)).toThrow();
});
