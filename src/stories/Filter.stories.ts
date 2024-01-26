import  { Meta, StoryObj } from '@storybook/react';
import { Filter } from '../components/Filter';

const meta = {
  title: 'Filter',
  component: Filter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} as Meta<typeof Filter>;

export default meta;

type Story = StoryObj<typeof meta>

export const Default = {
    args: {}
}