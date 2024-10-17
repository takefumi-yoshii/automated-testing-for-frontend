import { Meta, StoryObj } from "@storybook/react";
import { userEvent as user, within } from "@storybook/testing-library";
import { Component } from "./";

export default {
  component: Component,
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await user.type(canvas.getByRole("textbox"), "私の技術記事");
  },
};
