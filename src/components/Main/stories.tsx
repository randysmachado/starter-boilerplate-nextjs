import { ComponentStory, ComponentMeta } from '@storybook/react'

import Main from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'React Boilerplate',
    description: 'TypeScript, ReactJS, NextJS and Styled Components'
  }
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />
