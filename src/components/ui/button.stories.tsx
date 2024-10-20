import { ChevronRightIcon, EnvelopeOpenIcon, ReloadIcon } from '@radix-ui/react-icons';
import { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'ui/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      control: { type: 'radio' },
    },
    size: {
      options: ['default', 'icon', 'lg', 'sm'],
      control: { type: 'radio' },
    },
    children: { control: { type: 'text' } },
    asChild: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    variant: 'default',
    size: 'default',
    asChild: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary',
  },
  render: (args) => <Button {...args} />,
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
  render: (args) => <Button {...args} />,
};

export const Destructive: Story = {
  args: {
    children: 'Destructive',
    variant: 'destructive',
  },
  render: (args) => <Button {...args} />,
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
  render: (args) => <Button {...args} />,
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
  },
  render: (args) => <Button {...args} />,
};

export const LinkButton: Story = {
  args: {
    children: 'Link',
    variant: 'link',
  },
  render: (args) => <Button {...args} />,
};

export const Icon: Story = {
  args: {
    size: 'icon',
    variant: 'outline',
  },
  render: (args) => (
    <Button {...args}>
      <ChevronRightIcon className="size-4" />
    </Button>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <EnvelopeOpenIcon /> Login with Email
    </Button>
  ),
};

export const Loading: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Button {...args}>
      <ReloadIcon className="mr-2 size-4 animate-spin" />
      Please wait
    </Button>
  ),
};

export const AsChild: Story = {
  args: {
    asChild: true,
  },
  render: (args) => (
    <Button {...args}>
      <a href="/">Login</a>
    </Button>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <Button {...args}>Disabled</Button>,
};
