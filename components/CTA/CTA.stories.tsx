import { CTA, CTAProps } from "./CTA"
import { Story, Meta } from '@storybook/react/types-6-0'

export default {
  title: 'Tjikko/blocks/CTA',
  component: CTA,
  argTypes: {
  },
  parameters: {
    componentSubtitle: 'The CTA'
  }
} as Meta

const Template: Story<CTAProps> = (args) => <CTA {...args} />

export const Default = Template.bind({})
Default.args = {
  ctalist: [
    { name: "MAIN cta", url:"#" },
    { name: "SECONDARY CTA", url:"#" },
  ],
  caption: "We can also create any simulated realities",
  description: "for any use case you may have in mind",
}
