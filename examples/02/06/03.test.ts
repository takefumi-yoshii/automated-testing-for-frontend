//# examples/02/06/03.test.ts
const str = "こんにちは世界";

test("検証値 は 期待値 と等しい", () => {
  expect(str).toBe("こんにちは世界");
  expect(str).toEqual("こんにちは世界");
});
test("toContain", () => {
  expect(str).toContain("世界");
  expect(str).not.toContain("さようなら");
});
test("toHaveLength", () => {
  expect(str).toHaveLength(7);
  expect(str).not.toHaveLength(8);
});
