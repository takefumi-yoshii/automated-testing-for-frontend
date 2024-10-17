//# examples/02/07/index.test.ts
import { wait } from ".";

test("【1】指定時間待つと、経過時間をもって resolve される", () => {
  return wait(50).then((duration) => {
    expect(duration).toBe(50);
  });
});

test("【2】指定時間待つと、経過時間をもって resolve される", () => {
  return expect(wait(50)).resolves.toBe(50);
});

test("【3】指定時間待つと、経過時間をもって resolve される", async () => {
  expect(await wait(50)).toBe(50);
});
