import { SideNavItem, SideNavItemProps } from "./SideNavItem"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/SideNavItem',
  component: SideNavItem,
  argTypes: {
    type: { control: { type: "select", options: ["linkheader", "link", "header"] }},
    status: { control: { type: "select", options: ["default", "active", "hover"] }},
    spacer: { contro: { type: "boolean"}},
  },
  parameters: {
    componentSubtitle: 'The SideNavItem'
  }
} as Meta

const Template: Story<SideNavItemProps> = (args) => <SideNavItem {...args} />

export const Default = Template.bind({})
Default.args = {
  type: "linkheader",
  status: "default",
  spacer: false,
  text: "Link Header",
}


