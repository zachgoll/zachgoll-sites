import { Story, Meta } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Button',
  args: {
    children: 'Click Me',
    variant: 'primary',
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};