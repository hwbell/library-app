// Import Vue and the component being tested
import { shallowMount, mount } from '@vue/test-utils'

import Vue from 'vue'
import Navigator from '../components/Navigator.vue';

import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

describe('Navigator', () => {

  it('renders correctly', () => {
    const wrapper = mount(Navigator)
    expect(wrapper.element).toMatchSnapshot()
  })

  const wrapper = shallowMount(Navigator)
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('contains navigator selector', () => {
    expect(wrapper.html()).toContain('id="navigator"')
  })
  it('contains links-holder selector', () => {
    expect(wrapper.html()).toContain('class="links-holder"')
  })
  

})

