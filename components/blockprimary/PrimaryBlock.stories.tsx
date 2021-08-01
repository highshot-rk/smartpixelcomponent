import { PrimaryBlock, PrimaryBlockProps } from "./PrimaryBlock"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/PrimaryBlock',
  component: PrimaryBlock,
  argTypes: {
    type: { control: { type: "select", options: ["default", "vertical"] }},
    mirror: { control: { type: "boolean"}},
  },
  parameters: {
    componentSubtitle: 'The PrimaryBlock'
  }
} as Meta

const Template: Story<PrimaryBlockProps> = (args) => <PrimaryBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "default",
  mirror: false,
  imageurl: "https://source.unsplash.com/random",
  info: {
    head: "Heading",
    text: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam quis risus eget urna mollis ornare vel eu leo.",
    cta: {
      name: 'cta text',
      url: "/ctatext"
    }
  }
}
export const WidthControl = Template.bind({})
WidthControl.args = {
  className: "w-full",
  ...Default.args
}

