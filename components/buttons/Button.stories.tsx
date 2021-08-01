import { Button, ButtonProps } from "./Button"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Buttons',
  component: Button,
  argTypes: {
    type: { control: { type: "select", options: ["primary", "tertiary"] }},
    size: { control: { type: "select", options: ["small", "default", "large"] }},
    forceDark: { control: { type: "boolean" }}
  },
  parameters: {
    componentSubtitle: 'The Buttons'
  }
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "primary",
  text: 'LABEL',
  url: '',
  icon: 'none',
  size: "default",
  forceDark: false
}