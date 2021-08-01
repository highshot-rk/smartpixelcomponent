import { TextArea, TextAreaProps } from './TextArea'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Forms/TextArea',
  component: TextArea,
  parameters: {
    componentSubtitle: 'The Forms/TextArea'
  }
} as Meta

const Template: Story<TextAreaProps> = (args) => <TextArea {...args} />

export const Text = Template.bind({})
Text.args = {
  text: 'Text Area',
  placeholder: 'Placeholder',
  information: 'informations',
  error: 'Error Message',
  label: 'Label'
}
export const Focused = Template.bind({})
Focused.args = {
  ...Text.args,
  isFocussed: true
}
export const Error = Template.bind({})
Error.args = {
  ...Text.args,
  isError: true
}
export const Validate = Template.bind({})
Validate.args = {
  ...Text.args,
  isValidating: true
}
export const Success = Template.bind({})
Success.args = {
  ...Text.args,
  isSuccess: true
}
export const Disabled = Template.bind({})
Disabled.args = {
  ...Text.args,
  text: "",
  isDisabled: true
}
