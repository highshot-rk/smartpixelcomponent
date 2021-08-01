import { TextBlock, TextBlockProps } from "./TextBlock"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/TextBlock',
  component: TextBlock,
  argTypes: {
    // type: { control: { type: "select", options: ["default", "header", "button", "special"] }},
  },
  parameters: {
    componentSubtitle: 'The TextBlock',
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

const Template: Story<TextBlockProps> = (args) => <TextBlock {...args} />

export const Default = Template.bind({})
Default.args = {
  className: 'w-80 h-52',
  headerText: '01. HEADING',
  paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscig elit ed do elusmod tempor incidedunt ut laborre et dolore magna aliqua'
}
