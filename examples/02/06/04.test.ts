//# examples/02/06/04.test.ts
const tags = ["Jest", "Storybook", "Playwright", "React", "Next.js"];

test("toContain", () => {
  expect(tags).toContain("Jest");
  expect(tags).toHaveLength(5);
});
