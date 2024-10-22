import { Meta, StoryObj } from '@storybook/react';
import NavLinks from './nav-links';

const meta: Meta<typeof NavLinks> = {
  component: NavLinks,
  title: 'Components/NavLinks',
  tags: ['autodocs'],
  argTypes: {
    links: {
      control: {
        type: 'object',
      },
    },
  },
  args: {
    links: [
      {
        title: 'Home',
        href: '/',
      },
      {
        title: 'About',
        href: '/about/',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof NavLinks>;

export const Default: Story = {
  render: (args) => <NavLinks {...args} />,
};
