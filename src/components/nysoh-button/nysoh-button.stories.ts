export default {
  title: 'Components/Button',
  component: 'nysoh-button',
};

const Template = ({ label, link, variant }) => `<nysoh-button label=${label} link=${link} variant=${variant}></nysoh-button>`;

export const Button = Template.bind({});
Button.args = {
  label: 'Click Me!',
  link: '#',
  variant: 'primary',
};
