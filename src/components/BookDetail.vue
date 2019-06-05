<template>
  <div class="book-detail row">
    <!-- <p class="text">{{ this.book.volumeInfo.title}}</p> -->
    <!-- <i class="fas fa-times float-right" @click="closeDetail" @blur="closeDetail"></i> -->

    <i class="fas fa-times" @click="closeDetail"></i>

    <!-- image with info below -->
    <div class="image-holder col-sm-4">
      <img class="image" :src="info.imageLinks.thumbnail" alt>

      <p class="notes">{{parsePublisher(info)}}</p>
      <p class="notes">{{ `${info.pageCount} pages` }}</p>

      <star-rating
        class="stars"
        :star-size="20"
        :fixed-points="2"
        :read-only="true"
        :rating="info.averageRating"
      ></star-rating>
      <p class="notes">{{ `avg of ${info.ratingsCount || 0} ratings` }}</p>

    </div>

    <!-- description and button to add / delete item 
    whether or not you see an add or delete option depends on
    the 'type' prop. if its a search detail, we can add the book.
    if its NOT a search, we can only delete it - its already on the list-->
    <div class="col-sm-8">
      <h3 class="title">{{ info.title}}</h3>
      <h5 class="authors">{{ parseAuthors(info.authors)}}</h5>

      <p class="text">{{trimText(info.description, 1000)}}</p>

      <div v-if="type == 'search'" class="add-item row">
        <i class="fas fa-plus-circle" @click="addBookToList"></i>
        <p class="add">add to list</p>
      </div>

      <div v-if="type !== 'search'" class="add-item row">
        <i class="fas fa-times-circle" @click="removeBookFromList"></i>
        <p class="add">remove from list</p>
      </div>
    </div>
  </div>
</template>

<script>
// use this npm package for the stars, very handy
import StarRating from "vue-star-rating";

export default {
  name: "book-detail",
  components: {
    StarRating
  },
  props: {
    book: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      info: this.book.volumeInfo
      // type: this.type
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  computed: {
    //
  },
  methods: {
    // just to close and exit
    closeDetail() {
      console.log("emitting closeDetail");
      this.$emit("closeDetail");
    },
    // to add the book to list in Search component
    addBookToList() {
      console.log("emitting addBookToList");
      this.$emit("addBookToList");
    },
    // to remove the book from list in Search component
    removeBookFromList() {
      console.log("emitting removeBookFromList");
      this.$emit("removeBookFromList");
    },
    trimText(text, length) {
      let trail = text.length > length ? ` ...` : ``;
      return text.slice(0, length) + trail;
    },
    parseAuthors(arr) {
      return arr.join(`, `);
    },
    parsePublisher(info) {
      return info.publisher + `  ${info.publishedDate.slice(0, 4)}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$link-blue: rgb(0, 119, 255);

.book-detail {
  position: fixed;
  height: 60%;
  width: 75%;
  max-width: 500px;
  bottom: 0%;
  right: 15%;
  background-color: rgba(245, 245, 245, 0.98);
  box-shadow: 0px 0px 5px 2px rgba(5, 1, 71, 0.52);
  border-radius: 10px;
  overflow-y: scroll;
}
.image-holder {
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.image {
  max-height: 230px;
  max-width: 150px;
}
.notes {
  text-align: left;
  font-size: 14px;
  padding-top: 10px;
}
.title {
  text-align: left;
  padding-top: 8px;
  font-weight: 600;
}
.authors {
  text-align: left;
  margin: 5px;
}
.text {
  text-align: left;
  font-size: 14px;
  // color: black;
}
.add-item {
  margin: 0px;
}

i {
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 5px;
}
.fa-plus-circle {
  color: $link-blue;
  &:hover {
    color: rgb(89, 0, 255);
  }
}
.fa-times-circle {
  color: rgba(255, 0, 76, 0.726);
  &:hover {
    color: rgb(255, 0, 0);
  }
}
.fa-times {
  z-index: 2;
  position: absolute;
  top: 5px;
  right: 5px;
  &:hover {
    color: grey;
  }
}

// make the scrollbar a little softer
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);
  border-radius: 6px;
  margin: 4px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: rgba(180, 180, 180, 0.95);
  height: 40px;
  border-radius: 6px;
}

/* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: rgba(5, 120, 250, 0.95);
// }
</style>