//# examples/03/05/InputAccount.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputAccount } from "./InputAccount";

// テストファイルではじめにセットアップ
const user = userEvent.setup();

test("メールアドレス入力欄", async () => {
  render(<InputAccount />);
  // メールアドレス入力欄を取得
  const textbox = screen.getByRole("textbox", { name: "メールアドレス" });
  const value = "taro.tanaka@example.com";
  // textbox に value を入力
  await user.type(textbox, value);
  // 期待値が入力されている、フォーム構成要素が存在するかを検証
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});

test("パスワード入力欄", async () => {
  render(<InputAccount />);
  const password = screen.getByPlaceholderText("8文字以上で入力");
  const value = "abcd1234";
  await user.type(password, value);
  expect(screen.getByDisplayValue(value)).toBeInTheDocument();
});
