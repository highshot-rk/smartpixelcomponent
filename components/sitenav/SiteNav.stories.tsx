import { SiteNav, SiteNavProps } from "./SiteNav"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/SiteNav',
  component: SiteNav,
  argTypes: {
    styles: { control: { type: "select", options: ["black", "transWhite"] }},
  },
  parameters: {
    componentSubtitle: 'The Buttons SiteNav'
  }
} as Meta

const Template: Story<SiteNavProps> = (args) => <SiteNav {...args} />

export const Default = Template.bind({})
Default.args = {
  styles: "black",
  languagelist: {
    current: "En",
    submenu: [
      {
        groupcaption: null,
        grouplist: [
          {
              name: "De",
              url: "/de",
          },
          {
            name: "Afr",
            url: "/afr",
          }
        ]
      }
    ]
  },
  menudata: [
    {
      caption: "Why SmartPixel",
      submenu: [
        {
          groupcaption: null,
          grouplist: [
            {
                name: "Features",
                url: "/features",
            },
            {
              name: "Customer Success Stories",
              url: "/customer",
            },
            {
              name: "Quality and reliability",
              url: "/quality"
            },
            {
              name: "Contact Sales team",
              url: "/contact",
              type: "button"
            }
          ]          
        }
      ]
    },
    {
      caption: "Solutions",
      submenu: [
        {
          groupcaption: "BY INDUSTRY",
          grouplist: [
            {
                name: "Real estate",
                url: "/real",
            },
            {
              name: "Others",
              url: "/thers",
            }
          ]          
        },
        {
          groupcaption: "BY USE CASE",
          grouplist: [
            {
                name: "Sales Office",
                url: "/sale",
            },
            {
              name: "Presentation",
              url: "/presentation"
            },
            {
              name: "Remote",
              url: "/remote"
            },
            {
              name: "Contact Sales team",
              url: "/contact",
              type: "button"
            }
          ]          
        }
      ]
    },
    {
      caption: "Portfolio",
      captionlink: "/protfolio",
      submenu: null
    }
  ]
}