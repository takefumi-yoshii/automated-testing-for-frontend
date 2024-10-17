import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../examples/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  staticDirs: ["."],
  previewHead: (head) => `
    ${head}
    <link rel="stylesheet" href="/globals.css" />
  `,
};
export default config;
