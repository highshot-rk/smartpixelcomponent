import { BreadCrumb, BreadCrumbProps } from "./BreadCrumb"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/BreadCrumb',
  component: BreadCrumb,
  argTypes: {
    styles: { control: { type: "select", options: ["fixed", "responsive"] }},
  },
  parameters: {
    componentSubtitle: 'The BreadCrumb'
  }
} as Meta

const Template: Story<BreadCrumbProps> = (args) => <BreadCrumb {...args} />

export const Default = Template.bind({})
Default.args = {
  styles: "fixed",
  crumblist: [
    {
      name: "breadcrumb",
      url: "/bread1"
    },
    {
      name: "breadcrumb",
      url: "/bread2"
    },
    {
      name: "breadcrumb",
      url: "/bread3"
    }
  ]
}
