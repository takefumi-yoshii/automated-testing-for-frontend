import { Meta, StoryObj } from "@storybook/react";
import { Component } from "./";
import { parametersDefault } from "../parameters";
import { http, HttpResponse } from "msw";

export default {
  component: Component,
  args: { children: "送信する" },
  parameters: {
    ...parametersDefault,
    msw: {
      handlers: [
        http.get("https://myapi.com/data", () => {
          return HttpResponse.json({
            message: "my message",
          });
        }),
      ],
    },
  },
} as Meta<typeof Component>;

type Story = StoryObj<typeof Component>;

export const Default: Story = {};
