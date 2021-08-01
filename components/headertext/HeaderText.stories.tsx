import { HeaderText, HeaderTextProps } from "./HeaderText"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/HeaderText',
  component: HeaderText,
  argTypes: {
    // type: { control: { type: "select", options: ["default", "header", "button", "special"] }},
  },
  parameters: {
    componentSubtitle: 'The HeaderText',
    backgrounds: {
      default: 'dark background',
      values: [
        {
          name: 'dark background',
          value: '#000',
        }
      ],
    },
  }
} as Meta

const Template: Story<HeaderTextProps> = (args) => <HeaderText {...args} />

export const Default = Template.bind({})
Default.args = {
  styles: {
    type: "default",
    buttonText: "Book a demo",
    formPlaceholder: "Work email",
    caseText: "SP Architectutes",
    url: "/headertext",
  },
  title: "Some amazing title",
  breadcrumb: [
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
  ],
  text: "Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum."
}

export const NoURL = Template.bind({})
NoURL.args = {
  ...Default.args,
  styles: {
    ...Default.args.styles,
    url: null
  }
}