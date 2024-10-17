//# examples/03/04/ArticleListItem.test.tsx
import { render, screen } from "@testing-library/react";
import { ArticleListItem, ItemProps } from "./ArticleListItem";

const item: ItemProps = {
  id: "howto-testing-with-typescript",
  title: "TypeScript を使ったテストの書き方",
  body: "テストを書く時、TypeScript を使うことで、テストの保守性が向上します…",
};

test("ID に紐づいたリンクが表示される", () => {
  render(<ArticleListItem {...item} />);
  expect(screen.getByRole("link", { name: "もっと見る" })).toHaveAttribute(
    "href",
    "/articles/howto-testing-with-typescript",
  );
});
