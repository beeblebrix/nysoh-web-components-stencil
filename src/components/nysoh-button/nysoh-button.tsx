import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'nysoh-button',
  styleUrl: 'nysoh-button.scss',
  shadow: true,
})
export class NysohButton {
  @Prop() label: string;
  @Prop() link: string;
  @Prop() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';

  render() {
    return (
      <a href={this.link} class={`btn ${this.variant}`}>
        {this.label}
      </a>
    );
  }
}
