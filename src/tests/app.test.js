// Import Vue and the component being tested
import { mount } from '@vue/test-utils'

import Vue from 'vue'
import App from '../App.vue';

describe('App', () => {

  it('renders correctly', () => {
    const wrapper = mount(App)
    expect(wrapper.element).toMatchSnapshot()
  })

  const wrapper = mount(App)
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('contains app selector', () => {
    expect(wrapper.html()).toContain('id="app"')
  })
  it('contains content selector', () => {
    expect(wrapper.html()).toContain('id="content"')
  })
  it('contains navigator selector', () => {
    expect(wrapper.html()).toContain('id="navigator"')
  })
  it('contains search selector', () => {
    expect(wrapper.html()).toContain('id="search"')
  })

})

