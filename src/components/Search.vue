
<!-- Search is the master component for everything deriving from the user search -->

<template>
  <div id="search">
    <p id="ask">What do you feel like reading?</p>

    <!-- search input -->
    <div id="input-holder">
      <input
        type="text"
        id="search-input"
        v-model="query"
        placeholder="book, author, subject, keyword"
        @keyup.enter="fetchSearch"
      >
      <img id="search-icon" src="../assets/search.png" alt>
    </div>

    <!-- search results -->
    <div id="results" class="row">
      <div
        v-for="(result, index) in searchResults"
        :key="index"
        class="col-6 col-sm-4 col-md-3 col-lg-2"
      >
        <Thumbnail
          @showBookDetail="showBookDetail"
          v-if="!!result.volumeInfo.imageLinks"
          :source="result"
        />
      </div>
    </div>

    <!-- the detail page. this will show when a thumbnail is clicked -->
    <transition name="fade">
      <BookDetail v-if="this.showDetail" @closeDetail="closeDetail" @addBookToList="addBookToList" :book="this.detailBook"/>
    </transition>
  </div>
</template>

<script>
import Vue from "vue";

// components
import Thumbnail from "./Thumbnail";
import BookDetail from "./BookDetail";

// tools
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "",
  components: {
    Thumbnail,
    BookDetail
  },
  props: {
    //
  },
  data() {
    return {
      query: "",
      searchResults: [],
      readingList: [],
      showDetail: false,
      detailBook: null
    };
  },
  computed: {
    detailBookPresent() {
      return !!this.detailBook;
    },
    showDetailPage() {
      return !this.showDetail;
    }
  },
  methods: {
    fetchSearch() {
      // console.log(`fetching data for query: ${this.query}`);
      Vue.axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.query}`)
        .then(response => {
          // console.log(response);
          this.searchResults = response.data.items;
        })
        .catch(e => {
          console.log(e);
        });
    },
    // fired on the emitted event from clicking a thumbnail
    // for the modal to show/hide
    showBookDetail(data) {
      console.log(`showBookDetail firing for bookId: ${data.book.id}`);

      if (!this.showDetail) {
        this.detailBook = data.book;
        this.showDetail = true;
      } else {
        return;
      }
    },
    closeDetail() {
      console.log("closing detail");
      this.showDetail = false;
    },
    addBookToList() {
      let title = this.detailBook.volumeInfo.title;
      console.log(`adding book to list: ${title}`)
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$link-blue: rgb(0, 119, 255);

#search {
  // z-index: 1;
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#input-holder {
  display: flex;
  justify-content: center;
  margin: 20px;
}
#search-input {
  padding: 18px;
  width: 280px;
  height: 25px;
  border: 1px solid lightgrey;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
}
#ask {
  font-size: 18px;
}
#search-icon {
  cursor: pointer;
  margin: 8px;
  height: 24px;
  width: 30px;
}
// i {
//   font-size: 24px;
//   margin: 6px;
//   color: $link-blue;
//   cursor: pointer;
// }
#results {
  width: 90%;
  margin: 30px;
}
// for the animation of the modal
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>