import Button from './Button';

export default {
  title: 'Button',
};

// common argTypes
const argTypes = {
  disabled: {
    control: {
      type: 'boolean',
    },
  },
  text: {
    control: {
      type: 'text',
    },
    defaultValue: 'button',
  },
};

// Base Button
export const Base = (props) => (
  <div>
    <Button disabled={props.disabled}>{props.text}</Button>
  </div>
);
Base.argTypes = argTypes;
