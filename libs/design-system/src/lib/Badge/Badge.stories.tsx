import { Story, Meta } from '@storybook/react';
import { Badge, BadgeProps } from './Badge';

export default {
  component: Badge,
  title: 'Badge',
  args: {
    variant: 'primary',
    text: 'badge',
    isActive: true,
  },
} as Meta;

const Template: Story<BadgeProps> = (args) => <Badge {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
