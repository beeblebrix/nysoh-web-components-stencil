import { newE2EPage } from '@stencil/core/testing';

describe('nysoh-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nysoh-button></nysoh-button>');

    const element = await page.find('nysoh-button');
    expect(element).toHaveClass('hydrated');
  });
});
