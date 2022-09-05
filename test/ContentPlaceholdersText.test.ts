import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ContentPlaceholdersText from '@/components/ContentPlaceholdersText'
import { usePrefix } from '@/utils'

describe('ContentPlaceholders', () => {
  const createWrapper = (args?: any) => mount(ContentPlaceholdersText, {
    ...args,
  })

  it('should render correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should support lines', () => {
    const lines = Math.floor(Math.random() * 20)
    const wrapper = createWrapper({
      props: {
        lines,
      },
    })
    expect(wrapper.findAll(`.${usePrefix('text__line')}`)).toHaveLength(lines)
  })
})
