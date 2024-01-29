import { newSpecPage } from '@stencil/core/testing';
import { NysohInput } from '../nysoh-input';

describe('nysoh-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NysohInput],
      html: `<nysoh-input></nysoh-input>`,
    });
    expect(page.root).toEqualHtml(`
      <nysoh-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nysoh-input>
    `);
  });
});
