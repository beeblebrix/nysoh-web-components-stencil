export default {
    title: 'Components/Input',
    component: 'nysoh-input',
  };
  
  const Template = ({ value, type, disabled, placeholder }) => `<nysoh-input value="${value}" type="${type}" disabled="${disabled}" placeholder="${placeholder}"/>`;
  
  export const Input = Template.bind({});

  Input.args = {
    value: '',
    type: 'text',
    placeholder: 'address@email.com',
  };
  