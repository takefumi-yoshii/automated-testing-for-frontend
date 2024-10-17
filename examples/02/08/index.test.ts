//# examples/02/08/index.test.ts
import { timeout } from ".";

test("【1】指定時間待つと、経過時間をもって reject される", () => {
  return timeout(50).catch((duration) => {
    expect(duration).toBe(50);
  });
});

test("【2】指定時間待つと、経過時間をもって reject される", () => {
  return expect(timeout(50)).rejects.toBe(50);
});

test("【3】指定時間待つと、経過時間をもって reject される", async () => {
  expect.assertions(1);
  try {
    await timeout(50);
  } catch (err) {
    expect(err).toBe(50);
  }
});
