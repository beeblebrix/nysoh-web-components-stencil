import { newE2EPage } from '@stencil/core/testing';

describe('nysoh-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<nysoh-input></nysoh-input>');

    const element = await page.find('nysoh-input');
    expect(element).toHaveClass('hydrated');
  });
});
