//# examples/03/03/index.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { Form } from ".";

test("名前の表示", () => {
  render(<Form name="taro" />);
  // console.log(screen.getByText());
  // expect(screen.getByText()).toBeInTheDocument();
});

// test("ボタンの表示", () => {
//   render(<Form name="taro" />);
//   expect(screen.getByRole())
// });

// test("見出しの表示", () => {
//   render(<Form name="taro" />);
//   expect(screen.getByRole());
// });

// test("ボタンを押下すると、イベントハンドラーが実行される", () => {
//   const mockFn = jest.fn();
//   render(<Form name="taro" onSubmit={mockFn} />);
// });
