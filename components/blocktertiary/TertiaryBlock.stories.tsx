import { TertiaryBlock, TertiaryBlockProps } from "./TertiaryBlock"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/TertiaryBlock',
  component: TertiaryBlock,
  argTypes: {
    type: { control: { type: "select", options: ["default", "vertical"] }},
    mirror: { control: { type: "boolean"}},
  },
  parameters: {
    componentSubtitle: 'The TertiaryBlock'
  }
} as Meta

const Template: Story<TertiaryBlockProps> = (args) => <TertiaryBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "default",
  mirror: false,
  imageurl: "https://source.unsplash.com/random",
  info: {
    head: "Heading",
    text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo."
  }
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: "w-80",
  ...Default.args
}
