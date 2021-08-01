import { SecondaryBlock, SecondaryBlockProps } from "./SecondaryBlock"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/SecondaryBlock',
  component: SecondaryBlock,
  argTypes: {
    type: { control: { type: "select", options: ["default", "vertical"] }},
    mirror: { control: { type: "boolean"}},
  },
  parameters: {
    componentSubtitle: 'The SecondaryBlock'
  }
} as Meta

const Template: Story<SecondaryBlockProps> = (args) => <SecondaryBlock {...args} />

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
  className: "w-full",
  ...Default.args
}
