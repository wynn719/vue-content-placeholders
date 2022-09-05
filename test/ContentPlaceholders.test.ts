import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ContentPlaceholders from '@/components/ContentPlaceholders'
import { usePrefix } from '@/utils'

describe('ContentPlaceholders', () => {
  const createWrapper = (args?: any) => mount(ContentPlaceholders, {
    slots: {
      default: 'Default',
    },
    ...args,
  })

  it('should render correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should not render anything when slot is empty', () => {
    const wrapper = mount(ContentPlaceholders)
    expect(wrapper.html()).toBe('')
  })

  it('should support rounded', () => {
    const wrapper = createWrapper({
      props: {
        rounded: true,
      },
    })
    expect(wrapper.classes(usePrefix('is-rounded'))).toBe(true)
  })

  it('should support centered', () => {
    const wrapper = createWrapper({
      props: {
        centered: true,
      },
    })
    expect(wrapper.classes(usePrefix('is-centered'))).toBe(true)
  })

  it('should support animated', () => {
    const wrapper = createWrapper({
      props: {
        animated: true,
      },
    })
    expect(wrapper.classes(usePrefix('is-animated'))).toBe(true)
  })
})
