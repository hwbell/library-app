// Import Vue and the component being tested
import { shallowMount, mount } from '@vue/test-utils'

import Vue from 'vue'
import Search from '../components/Search.vue';
import { wrap } from 'module';

// rendering basic elements
describe('Search', () => {

  it('renders correctly', () => {
    const wrapper = mount(Search)
    expect(wrapper.element).toMatchSnapshot()
  })

  const wrapper = shallowMount(Search)
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('contains search selector', () => {
    expect(wrapper.html()).toContain('id="search"')
  })

  it('contains list-intro selector, meaning results are empty', () => {
    expect(wrapper.html()).toContain('class="list-intro"')
  })

  it('initially only contains search results after input trigger', () => {
    expect(wrapper.html()).not.toContain('result-item')

    // then fire and check if it is there
    wrapper.find("input").setValue("history")
    wrapper.find("input").trigger('click')
    wrapper.vm.$nextTick(() => {
      expect(wrapper.html()).toContain('result-item')
      done()
    })

  })

  // functions
  it('should return some results when searching a query', () => {

    // firt results should be an empty array
    expect(wrapper.vm.searchResults.length).toBe(0)

    // then fire and check if it is NOT empty
    wrapper.find("input").setValue("history")
    wrapper.find("input").trigger
    
    wrapper.vm.$nextTick(() => {
      expect(wrapper.vm.searchResults.length).not.toBe(0)
      done()
    })

  })

  it('should switch showDetail to true when showBookDetail fires', () => {

    // use some dummy data for the function
    let data = {
      book: {
        id: '123abc',
      },
      type: 'search'
    }

    // should be false to start
    expect(wrapper.vm.showDetail).toBe(false);

    // fire and check if it changes showDetail
    wrapper.vm.showBookDetail(data)
    expect(wrapper.vm.showDetail).toBe(true);

  })

  it('should make showDetail false when closeDetail fires', () => {

    wrapper.setData({ showDetail: true })
    expect(wrapper.vm.showDetail).toBe(true);

    // fire and check if it changes showDetail
    wrapper.vm.closeDetail()
    expect(wrapper.vm.showDetail).toBe(false);

  })

  it('should add a book to the reading list', () => {
    // should be empty to start
    expect(wrapper.vm.readingList.length).toBe(0);

    // dummy data
    // define some props
    let book = {
      id: '123abc',
      volumeInfo: {
        title: 'a good book',
        imageLinks: {
          thumbnail: 'https://books.google.com/books/content?id=antycYtRXOUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        }
      }
    }

    // set the detailBook, the one that gets added
    wrapper.setData({
      detailBook: book
    })

    // fire the function and check result 
    wrapper.vm.addBookToList();

    expect(wrapper.vm.readingList.length).toBe(1);
    expect(wrapper.vm.readingList[0].id).toBe('123abc');

  })

  it('should remove a book from the reading list', () => {

    wrapper.setData({ readingList: [] })
    // should be empty to start
    expect(wrapper.vm.readingList.length).toBe(0);

    // dummy data
    let book = {
      id: '123abc',
      volumeInfo: {
        title: 'a good book',
        imageLinks: {
          thumbnail: 'https://books.google.com/books/content?id=antycYtRXOUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        }
      }
    }
    let book2 = {
      id: '123abcdef',
      volumeInfo: {
        title: 'a second good book',
        imageLinks: {
          thumbnail: 'https://books.google.com/books/content?id=antycYtRXOUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
        }
      }
    }

    // add both to the list
    wrapper.setData({
      readingList: [book, book2]
    })

    // check they got added
    expect(wrapper.vm.readingList.length).toBe(2);

    // set the detailBook, the one that gets removed
    wrapper.setData({
      detailBook: book
    })

    // fire the function and check result
    wrapper.vm.removeBookFromList();

    expect(wrapper.vm.readingList.length).toBe(1);
    expect(wrapper.vm.readingList[0].id).toBe('123abcdef');

  })



})