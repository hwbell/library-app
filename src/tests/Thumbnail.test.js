// Import Vue and the component being tested
import { shallowMount, mount } from '@vue/test-utils'

import Vue from 'vue'
import Thumbnail from '../components/Thumbnail.vue';

describe('Thumbnail', () => {

  // define some props
  let someProps = {
    propsData: {
      source: {
        volumeInfo: {
          imageLinks: {
            thumbnail: 'https://books.google.com/books/content?id=antycYtRXOUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
          }
        }
      },
      type: 'search'
    }
  }
  it('renders correctly', () => {
    const wrapper = mount(Thumbnail, someProps)
    expect(wrapper.element).toMatchSnapshot()
  })

  const wrapper = mount(Thumbnail, someProps)
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('contains an image', () => {
    expect(wrapper.html()).toContain('img')
  })
  it('should fire the showBookDetail emitter', () => {

    // fire and check if it emits the right event
    wrapper.vm.showDetail() // should emit 'showBookDetail' to parent

    // assert event has been emitted
    expect(wrapper.emitted().showBookDetail).toBeTruthy()

  })


})

