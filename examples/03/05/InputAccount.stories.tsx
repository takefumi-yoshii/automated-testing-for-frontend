//# examples/03/05/InputAccount.stories.tsx
import { StoryObj, Meta } from "@storybook/react";
import { InputAccount } from "./InputAccount";

export default {
  component: InputAccount,
} as Meta<typeof InputAccount>;

type Story = StoryObj<typeof InputAccount>;

export const Default: Story = {};
