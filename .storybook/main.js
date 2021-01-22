const path = require("path");
module.exports = {
  stories: ["../packages/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-controls",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.less$/,
      use: ["style-loader", "css-loader", "resolve-url-loader", "less-loader", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });
    // Return the altered config
    return config;
  },
};
