import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'nysoh-input',
  styleUrl: 'nysoh-input.scss',
  shadow: true,
})
export class NysohInput {
  @Prop() value: string;
  @Prop() type: 'button' | 'checkbox' | 'color' | 'date'| 'color'| 'datetime-local'| 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'range' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week'  = 'text';
  @Prop() placeholder: string;
  @Prop() disabled: boolean;

  render() {
    return (
      <input class="form-control" value={this.value} type={this.type} disabled={this.disabled} placeholder={this.placeholder}/>
    );
  }

}
