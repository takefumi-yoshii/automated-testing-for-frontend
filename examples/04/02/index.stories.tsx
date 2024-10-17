import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Component } from "./";
import { parametersDefault } from "../parameters";

export default {
  component: Component,
  args: { children: "送信する", onClick: fn() },
  parameters: {
    ...parametersDefault,
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
