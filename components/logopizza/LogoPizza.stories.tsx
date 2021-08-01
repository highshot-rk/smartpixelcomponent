import { LogoPizza, LogoPizzaProps } from "./LogoPizza"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/LogoPizza',
  component: LogoPizza,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The LogoPizza'
  }
} as Meta

const Template: Story<LogoPizzaProps> = (args) => <LogoPizza {...args} />

export const Default = Template.bind({})
Default.args = {
    companyArr: [
        { imgUrl: "./images/test_logo_01.png", href: "#" },
        { imgUrl: "./images/test_logo_02.png", href: "#" },
        { imgUrl: "./images/test_logo_03.png", href: "#" },
        { imgUrl: "./images/test_logo_04.png", href: "#" },
        { imgUrl: "./images/test_logo_05.png", href: "#" },
        { imgUrl: "./images/test_logo_06.png", href: "#" },
        { imgUrl: "./images/test_logo_07.png", href: "#" },
        { imgUrl: "./images/test_logo_08.png", href: "#" },
        //{ imgUrl: "../../assets/images/test_logo_09.png", href: "#" },
    ],
    mode: "Default"
}

export const Compact = Template.bind({})
Compact.args = {
    ...Default.args,
    mode: "Compact"
}