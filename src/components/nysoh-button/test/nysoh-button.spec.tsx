import { newSpecPage } from '@stencil/core/testing';
import { NysohButton } from '../nysoh-button';

describe('nysoh-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [NysohButton],
      html: `<nysoh-button></nysoh-button>`,
    });
    expect(page.root).toEqualHtml(`
      <nysoh-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </nysoh-button>
    `);
  });
});
