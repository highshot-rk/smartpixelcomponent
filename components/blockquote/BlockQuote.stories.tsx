import { BlockQuote, BlockQuoteProps } from "./BlockQuote"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/BlockQuote',
  component: BlockQuote,
  argTypes: {
    
  },
  parameters: {
    componentSubtitle: 'The BlockQuote'
  }
} as Meta

const Template: Story<BlockQuoteProps> = (args) => <BlockQuote {...args} />

export const Default = Template.bind({})
Default.args = {
  speech: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  avatarUrl: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
  customerName: "Maria Lopez, VP of Design at Meshery",
}