//# examples/02/10/01.test.ts
import { greet } from ".";

test("挨拶を返す（本来の実装どおり）", () => {
  expect(greet("Taro")).toBe("Hello! Taro.");
});
