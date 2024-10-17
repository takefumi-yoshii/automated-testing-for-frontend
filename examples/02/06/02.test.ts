//# examples/02/06/02.test.ts
describe("数値の検証", () => {
  const value = 2 + 2;
  test("検証値 は 期待値 と等しい", () => {
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });
  test("検証値 は 期待値 より大きい", () => {
    expect(value).toBeGreaterThan(3); // 4 > 3
    expect(value).toBeGreaterThanOrEqual(4); // 4 >= 4
  });
  test("検証値 は 期待値 より小さい", () => {
    expect(value).toBeLessThan(5); // 4 < 5
    expect(value).toBeLessThanOrEqual(4); // 4 <= 4
  });
});
