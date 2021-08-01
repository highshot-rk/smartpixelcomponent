import { ListNav, ListNavProps } from "./ListNav"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/ListNav',
  component: ListNav,
  argTypes: {
    styles: { control: { type: "select", options: ["flat", "elevated"] }},
  },
  parameters: {
    componentSubtitle: 'The Buttons ListNav'
  }
} as Meta

const Template: Story<ListNavProps> = (args) => <ListNav {...args} />

export const SingleData = Template.bind({})
SingleData.args = {
  linkList:
  [
    {
        groupcaption: "Group 01",
        grouplist: [
            {
                name: "Link 01",
                url: "/linkURL",
            },
            {
                name: "Link 02",
                url: "/linkURL",
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
  linkList: [
    {
        groupcaption: "Group 01",
        grouplist: [
            {
                name: "Link 01",
                url: "/linkURL",
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
            },
            {
                name: "Link 02",
                url: "/linkURL"
            },
            {
                name: "Link 03",
                url: "/linkURL",
            }
        ]
    },
    {
        groupcaption: "Group 03",
        grouplist: [
            {
                name: "Link 01",
                url: "/linkURL",
            },
            {
                name: "Link 02",
                url: "/linkURL"
            },
            {
                name: "Link 03",
                url: "/linkURL",
            }
        ]
    }
  ]
}