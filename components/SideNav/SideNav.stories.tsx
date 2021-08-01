import { SideNav, SideNavProps } from "./SideNav"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/SideNav',
  component: SideNav,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The SideNav'
  }
} as Meta

const Template: Story<SideNavProps> = (args) => <SideNav {...args} />

export const Default = Template.bind({})
Default.args = {
  navObj: [
    {
      type: "linkheader",
      status: "active",
      text: "All",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "header",
      status: "default",
      text: "Use case",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "link",
      status: "default",
      text: "Event",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "link",
      status: "default",
      text: "Sales office",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "link",
      status: "default",
      text: "Presentation",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "link",
      status: "default",
      text: "Remote",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "header",
      status: "default",
      text: "Industry",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "link",
      status: "default",
      text: "Residential",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "link",
      status: "default",
      text: "Commercial",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "link",
      status: "default",
      text: "Engineering",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    },
    {
      type: "link",
      status: "default",
      text: "Mix",
      url: `https://i.pravatar.cc/${Math.ceil(1000 * Math.random())}`,
    }
  ]
}


