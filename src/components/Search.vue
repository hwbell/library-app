
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

    <p v-if="this.searchResults.length>0" class="subtitle">search results</p>

    <!-- draggable is a nice npm package -->
    <draggable
      class="results row"
      v-model="searchResults"
      group="search"
      @start="drag=true"
      @end="drag=false"
    >
      <div v-for="(result, index) in searchResults" :key="index" class="result-item col-6 col-sm-4 col-md-3 col-lg-2">
        <Thumbnail
          @showBookDetail="showBookDetail"
          v-if="!!result.volumeInfo.imageLinks"
          :source="result"
          type="search"
        />
      </div>
    </draggable>

    <!-- reading list -->

    <p id="reading-list" class="subtitle">Your Reading List</p>

    <!-- if nothing is there ... -->
    <p v-if="this.readingList.length === 0" class="list-intro">
      {{`Your list is empty! Search for some books from Google, add them to your
      list, and they will appear here. `}}
    </p>

    <!--  -->
    <!-- draggable is a nice npm package -->
    <draggable
      class="results row"
      v-model="readingList"
      group="reading"
      @start="drag=true"
      @end="drag=false"
    >
      <div v-for="(result, index) in readingList" :key="index" class="result-item col-6 col-sm-4 col-md-3 col-lg-2">
        <Thumbnail
          @showBookDetail="showBookDetail"
          v-if="!!result.volumeInfo.imageLinks"
          :source="result"
          type="reading-list"
        />
      </div>
    </draggable>

    <!-- the detail page. this will show when a thumbnail is clicked -->
    <transition name="fade">
      <BookDetail
        v-if="this.showDetail"
        @closeDetail="closeDetail"
        @addBookToList="addBookToList"
        @removeBookFromList="removeBookFromList"
        :book="this.detailBook"
        :type="this.detailType"
        :showPopup="this.showPopup"
      />
    </transition>
  </div>
</template>

<script>
import Vue from "vue";
import draggable from "vuedraggable";

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
    BookDetail,
    draggable // register the npm component
  },
  data() {
    return {
      query: "",
      searchResults: [],
      readingList: [],
      showDetail: false,
      showPopup: false,
      detailType: "search",
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
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            this.query
          }&max-results=20`
        )
        .then(response => {
          // console.log(response);
          this.searchResults = response.data.items;
          this.searchFired = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    // fired on the emitted event from clicking a thumbnail
    // for the modal to show/hide
    showBookDetail(data) {
      console.log(
        `showBookDetail firing for bookId: ${data.book.id}, a ${data.type} book`
      );

      if (!this.showDetail) {
        this.detailBook = data.book;
        this.detailType = data.type;
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
      console.log(`adding book to list: ${title}`);

      // see if the book is already in the list
      let present = false;
      this.readingList.forEach(book => {
        if (book.id == this.detailBook.id) {
          present = true;
        }
      });

      //  add the book if it wasn't already there
      if (!present) {
        this.readingList.push(this.detailBook);

        // alert(`${title} was added to your list!`);
      } else {
        // alert("That book is already on your list.");
      }
    },
    removeBookFromList() {
      console.log(`removing ${this.detailBook.volumeInfo.title} from list`);
      this.readingList = this.readingList.filter(book => {
        return book.id !== this.detailBook.id;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$link-blue: rgb(0, 119, 255);

#search {
  // z-index: 1;
  // background-color: rgba(255, 255, 255, 0.8);
  width: 90%;
  // margin: auto auto;
  // height: 100%;
  margin-top: 100px;
  margin-bottom: 80px;
  // border-radius: 10px;
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
#ask {
  font-size: 24px;
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
.list-intro {
  font-size: 18px;
  width: 60%;
  text-align: left;
}
.subtitle {
  font-size: 24px;
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
.results {
  width: 90%;
  margin-bottom: 30px;
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