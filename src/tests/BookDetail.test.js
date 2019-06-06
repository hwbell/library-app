// Import Vue and the component being tested
import { shallowMount, mount } from '@vue/test-utils'

import Vue from 'vue'
import BookDetail from '../components/BookDetail.vue';

// this components needs a lot of properties. this is a sample obj from the api
const mockData = {
  "kind": "books#volume",
  "id": "antycYtRXOUC",
  "etag": "1R+uvzDKaFw",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/antycYtRXOUC",
  "volumeInfo": {
    "title": "California",
    "subtitle": "A History",
    "authors": [
      "Kevin Starr"
    ],
    "publisher": "Random House Digital, Inc.",
    "publishedDate": "2007",
    "description": "A definitive, single-volume history of the Golden State ranges from the earliest Native American cultures, through the Spanish and Mexican eras, the Gold Rush, and rise of Hollywood, to the twenty-first century, chronicling the events, places, and personalities that have shaped California. Reprint. 15,000 first printing.",
    "industryIdentifiers": [
      {
        "type": "ISBN_13",
        "identifier": "9780812977530"
      },
      {
        "type": "ISBN_10",
        "identifier": "081297753X"
      }
    ],
    "readingModes": {
      "text": false,
      "image": false
    },
    "pageCount": 370,
    "printType": "BOOK",
    "categories": [
      "History"
    ],
    "averageRating": 2.5,
    "ratingsCount": 4,
    "maturityRating": "NOT_MATURE",
    "allowAnonLogging": false,
    "contentVersion": "0.2.2.0.preview.0",
    "panelizationSummary": {
      "containsEpubBubbles": false,
      "containsImageBubbles": false
    },
    "imageLinks": {
      "smallThumbnail": "http://books.google.com/books/content?id=antycYtRXOUC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
      "thumbnail": "http://books.google.com/books/content?id=antycYtRXOUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
    },
    "language": "en",
    "previewLink": "http://books.google.com/books?id=antycYtRXOUC&printsec=frontcover&dq=history&hl=&cd=1&source=gbs_api",
    "infoLink": "http://books.google.com/books?id=antycYtRXOUC&dq=history&hl=&source=gbs_api",
    "canonicalVolumeLink": "https://books.google.com/books/about/California.html?hl=&id=antycYtRXOUC"
  },
  "saleInfo": {
    "country": "US",
    "saleability": "NOT_FOR_SALE",
    "isEbook": false
  },
  "accessInfo": {
    "country": "US",
    "viewability": "PARTIAL",
    "embeddable": true,
    "publicDomain": false,
    "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
    "epub": {
      "isAvailable": false
    },
    "pdf": {
      "isAvailable": false
    },
    "webReaderLink": "http://play.google.com/books/reader?id=antycYtRXOUC&hl=&printsec=frontcover&source=gbs_api",
    "accessViewStatus": "SAMPLE",
    "quoteSharingAllowed": false
  },
  "searchInfo": {
    "textSnippet": "A definitive, single-volume history of the Golden State ranges from the earliest Native American cultures, through the Spanish and Mexican eras, the Gold Rush, and rise of Hollywood, to the twenty-first century, chronicling the events, ..."
  }
}
describe('v', () => {

  let someProps = {
    propsData: {
      book: mockData,
      type: 'search'
    }
  }

  it('renders correctly', () => {
    const wrapper = mount(BookDetail,someProps)

    expect(wrapper.element).toMatchSnapshot()
  })

  const wrapper = shallowMount(BookDetail, someProps)
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  // it('contains navigator selector', () => {
  //   expect(wrapper.html()).toContain('id="navigator"')
  // })
  // it('contains links-holder selector', () => {
  //   expect(wrapper.html()).toContain('class="links-holder"')
  // })
  

})

