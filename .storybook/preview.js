import { defineCustomElements } from '../loader';
import { setStencilDocJson } from '@pxtrn/storybook-addon-docs-stencil';
import docJson from '../path/to/docs.json';

if (docJson) setStencilDocJson(docJson);

defineCustomElements();

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: { hideNoControlsWarning: true },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
