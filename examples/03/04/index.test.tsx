//# examples/03/04/index.test.tsx
import { render, screen } from "@testing-library/react";
import { ArticleList } from ".";
import { items } from "./fixture";

test("items の数だけ一覧表示される", () => {
  render(<ArticleList items={items} />);
  expect(screen.getAllByRole("listitem")).toHaveLength(3);
});

// test("一覧が表示される", () => {
//   render(<ArticleList items={items} />);
//   const list = screen.getByRole("list");
// });

// test("一覧アイテムが空のとき「投稿記事がありません」が表示される", () => {
//   // 空配列を与えて、一覧表示がない状態を再現する
//   render(<ArticleList items={[]} />);
//   // list がない場合、getByRole ではエラーが発生する
//   const list = screen.getByRole("list");
// });
