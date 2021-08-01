import { Footer, FooterProps } from "./Footer"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/Footer',
  component: Footer,
  argTypes: {
    // type: { control: { type: "select", options: ["default", "header", "button", "special"] }},
  },
  parameters: {
    componentSubtitle: 'The Footer'
  }
} as Meta

const Template: Story<FooterProps> = (args) => <Footer {...args} />

export const Default = Template.bind({})
Default.args = {
  footermenu: [
    {
      caption: 'Why Smart Pixel',
      menuList: [
        {
          name: "Features",
          url: "/Features"
        },
        {
          name: "Customers Success Stories",
          url: "/customers"
        },
        {
          name: "Quality & Reliability",
          url: "/quality"
        }
      ]
    },
    {
      caption: 'Solutions by INDUSTRY',
      menuList: [
        {
          name: "Real estate",
          url: "/real"
        },
        {
          name: "Others",
          url: "/others"
        }
      ]
    },
    {
      caption: 'Solutions BY USE CASE',
      menuList: [
        {
          name: "Sales Officee",
          url: "/sale"
        },
        {
          name: "Presentation",
          url: "/presentation"
        },
        {
          name: "Remote",
          url: "/remote"
        }
      ]
    },
    {
      caption: 'Other links',
      menuList: [
        {
          name: "Portfolio",
          url: "/portfolio"
        },
        {
          name: "Company",
          url: "/company"
        },
        {
          name: "Contact us",
          url: "/contact"
        },
        {
          name: "Career",
          url: "/career"
        }
      ]
    }
  ]
}
