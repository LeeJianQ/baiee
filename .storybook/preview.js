import { INITIAL_VIEWPORTS, MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
}