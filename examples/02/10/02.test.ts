//# examples/02/10/02.test.ts
import { greet } from ".";

jest.mock(".");

test("挨拶を返さない（本来の実装ではない）", () => {
  expect(greet("Taro")).toBe(undefined);
});
