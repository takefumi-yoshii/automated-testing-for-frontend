import { Meta, StoryObj } from "@storybook/react";
import { userEvent as user, within, expect } from "@storybook/test";
import { Component } from "./";

export default {
  component: Component,
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};

export const Submitted: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await user.type(canvas.getByRole("textbox"), "Takepepe");
    await user.click(canvas.getByRole("switch"));
    await user.click(canvas.getByRole("button"));
  },
};

export const ValidationError: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await user.click(canvas.getByRole("switch"));
    await user.click(canvas.getByRole("button"));
    await expect(
      canvas.getByText("名前を入力してください"),
    ).toBeInTheDocument();
  },
};
