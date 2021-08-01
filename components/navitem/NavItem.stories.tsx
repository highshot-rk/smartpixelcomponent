import { NavItem, NavItemProps } from "./NavItem"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/NavItem',
  component: NavItem,
  argTypes: {
    styles: { control: { type: "select", options: ["default", "default/white", "flat"] }},
  },
  parameters: {
    componentSubtitle: 'The Buttons NavItem'
  }
} as Meta

const Template: Story<NavItemProps> = (args) => <NavItem {...args} />

export const None = Template.bind({})
None.args = {
  styles: "default",
  submenu: null
}

export const SingleData = Template.bind({})
SingleData.args = {
  submenu:
  [
    {
        groupcaption: "Group 01",
        grouplist: [
            {
                name: "Link 01",
                url: "/linkURL",
                type: "link"
            },
            {
                name: "Link 02",
                url: "/linkURL",
                type: "button"
            },
            {
                name: "Link 03",
                url: "/linkURL",
                type: "button"
            }
        ]
    }]
}
export const MultiData = Template.bind({})
MultiData.args = {
  submenu: [
    {
        groupcaption: "Group 01",
        grouplist: [
            {
                name: "Link 01",
                url: "/linkURL",
                type: "link"
            },
            {
                name: "Link 02",
                url: "/linkURL"
            },
            {
                name: "Link 03",
                url: "/linkURL",
                type: "button"
            }
        ]
    },
    {
        groupcaption: "Group 02",
        grouplist: [
            {
                name: "Link 01",
                url: "/linkURL",
                type: "link"
            },
            {
                name: "Link 02",
                url: "/linkURL"
            },
            {
                name: "Link 03",
                url: "/linkURL",
                type: "link"
            }
        ]
    },
    {
        groupcaption: "Group 03",
        grouplist: [
            {
                name: "Link 01",
                url: "/linkURL",
                type: "button"
            },
            {
                name: "Link 02",
                url: "/linkURL"
            },
            {
                name: "Link 03",
                url: "/linkURL"
            }
        ]
    }
  ]
}