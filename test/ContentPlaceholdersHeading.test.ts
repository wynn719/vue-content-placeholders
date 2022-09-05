import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import ContentPlaceholdersHeading from '@/components/ContentPlaceholdersHeading'
import { usePrefix } from '@/utils'

describe('ContentPlaceholdersHeading', () => {
  const createWrapper = (args?: any) => mount(ContentPlaceholdersHeading, {
    ...args,
  })

  it('should render correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('should support img', () => {
    const wrapper = createWrapper({
      props: {
        img: true,
      },
    })
    expect(wrapper.find(`.${usePrefix('heading__img')}`).exists()).toBe(true)
  })
})
