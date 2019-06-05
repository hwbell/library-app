// Import Vue and the component being tested
import { shallowMount } from '@vue/test-utils'

import Vue from 'vue'
import Search from '../components/Search.vue';

describe('Search', () => {
  const wrapper = shallowMount(Search)
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('contains search selector', () => {
    expect(wrapper.html()).toContain('id="search"')
  })
  it('contains results-row selector', () => {
    expect(wrapper.html()).toContain('class="results row"')
  })
  
  it('contains list-intro selector, meaning results are empty', () => {
    expect(wrapper.html()).toContain('class="list-intro"')
  })

  it('initially contains no search results', () => {
    expect(wrapper.html()).not.toContain('class="result-item"')
  })


})