//# examples/03/06/Form.test.tsx
import { render } from "@testing-library/react";
import { Form } from "./Form";

test("Snapshot: アカウント名「taro」が表示される", () => {
  const { container } = render(<Form name="taro" />);
  expect(container).toMatchSnapshot();
});
