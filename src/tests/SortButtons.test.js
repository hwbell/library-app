// Import Vue and the component being tested
import { shallowMount, mount } from '@vue/test-utils'

import Vue from 'vue'
import SortButtons from '../components/SortButtons.vue';

describe('SortButtons', () => {

  it('renders correctly', () => {
    const wrapper = mount(SortButtons)
    expect(wrapper.element).toMatchSnapshot()
  })

  const wrapper = shallowMount(SortButtons)
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('contains sort-buttons selector', () => {
    expect(wrapper.html()).toContain('id="sort-buttons"')
  })
  
  // test each of the buttons
  it('should emit sortReadingList with the correct data', () => {

    wrapper.find(".title-button").trigger('click')
    expect(wrapper.emitted().sortReadingList).toBeTruthy()
    expect(wrapper.emitted().sortReadingList[0]).toMatchObject([{"sortBy": "title"}])

    wrapper.find(".author-button").trigger('click')
    expect(wrapper.emitted().sortReadingList).toBeTruthy()
    expect(wrapper.emitted().sortReadingList[1]).toMatchObject([{"sortBy": "author"}])

    wrapper.find(".date-button").trigger('click')
    expect(wrapper.emitted().sortReadingList).toBeTruthy()
    expect(wrapper.emitted().sortReadingList[2]).toMatchObject([{"sortBy": "date"}])

  })

})

