import { BigHeader, BigHeaderProps } from "./BigHeader"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/BigHeader',
  component: BigHeader,
  argTypes: {
    bgtype: { control: { type: "select", options: ["image", "video"] }},
  },
  parameters: {
    componentSubtitle: 'The BigHeader'
  }
} as Meta

const Template: Story<BigHeaderProps> = (args) => <BigHeader {...args} />

export const Default = Template.bind({})
Default.args = {
  bgtype: "video",
  headerinfo: {
    styles: {
      type: "default",
      buttonText: "Book a demo",
      formPlaceholder: "Work email",
      caseText: "SP Architectutes",
      url: "/headertext",
    },
    title: "Real-time 3D experiences enabling decision-makers",
    breadcrumb: [
      {
        name: "breadcrumb",
        url: "/bread1"
      },
      {
        name: "breadcrumb",
        url: "/bread2"
      }
    ],
    text: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
  }
}


