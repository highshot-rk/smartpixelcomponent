import { BlockIcon, BlockIconProps } from "./BlockIcon"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/BlockIcon',
  component: BlockIcon,
  argTypes: {
    type: { control: { type: "select", options: ["horizontal", "vertical"] }},
  },
  parameters: {
    componentSubtitle: 'The BlockIcon'
  }
} as Meta

const Template: Story<BlockIconProps> = (args) => <BlockIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "horizontal",
  imageurl: "",
  heading: "Heading",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
}


