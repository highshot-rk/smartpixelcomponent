import { SearchBar, SearchBarProps } from './SearchBar'
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Forms/SearchBar',
  component: SearchBar,
  parameters: {
    componentSubtitle: 'The Forms/SearchBar'
  }
} as Meta

const Template: Story<SearchBarProps> = (args) => <SearchBar {...args} />

export const Text = Template.bind({})
Text.args = {
  text: 'Search',
  placeHolder: 'Search'
}
export const Focused = Template.bind({})
Focused.args = {
  ...Text.args,
  isFocussed: true
}
export const Disabled = Template.bind({})
Disabled.args = {
  ...Text.args,
  text: '',
  isDisabled: true
}
