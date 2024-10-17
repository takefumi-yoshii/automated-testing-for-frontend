//# examples/03/05/Agreement.stories.tsx
import { StoryObj, Meta } from "@storybook/react";
import { Agreement } from "./Agreement";

export default {
  component: Agreement,
} as Meta<typeof Agreement>;

type Story = StoryObj<typeof Agreement>;

export const Default: Story = {};
