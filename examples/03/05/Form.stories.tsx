//# examples/03/05/Form.stories.tsx
import { StoryObj, Meta } from "@storybook/react";
import { Form } from "./Form";

export default {
  component: Form,
  args: { name: "taro" },
} as Meta<typeof Form>;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};
