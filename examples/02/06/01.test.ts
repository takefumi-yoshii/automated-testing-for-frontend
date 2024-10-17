//# examples/02/06/01.test.ts
test("「真の値」の検証", () => {
  expect(1).toBeTruthy();
  expect("1").toBeTruthy();
  expect(true).toBeTruthy();
  expect(0).not.toBeTruthy();
  expect("").not.toBeTruthy();
  expect(false).not.toBeTruthy();
});

test("「偽の値」の検証", () => {
  expect(0).toBeFalsy();
  expect("").toBeFalsy();
  expect(false).toBeFalsy();
  expect(1).not.toBeFalsy();
  expect("1").not.toBeFalsy();
  expect(true).not.toBeFalsy();
});
