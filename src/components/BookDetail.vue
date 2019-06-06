<template>
  <div v-click-outside="closeDetail" class="book-detail row">
    <!-- <p class="text">{{ this.book.volumeInfo.title}}</p> -->
    <!-- <i class="fas fa-times float-right" @click="closeDetail" @blur="closeDetail"></i> -->

    <i class="fas fa-times" @click="closeDetail"></i>

    <!-- image with info below - pages, rating, etc-->
    <div class="image-holder col-sm-4">
      <img class="image" :src="info.imageLinks.thumbnail" alt>

      <p class="notes">{{info.publisher + `  ${info.publishedDate.slice(0, 4)}`}}</p>
      <p class="notes">{{ `${info.pageCount} pages` }}</p>

      <star-rating
        class="stars"
        :glow="5"
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
    <div class="col-sm-8" >
      <h4 class="title">{{ info.title}}</h4>
      <h5 class="authors">{{ info.authors.slice(0,2).join(', ')}}</h5>

      <p class="text">{{info.description.slice(0,350) + '...'}}</p>

      <!-- popup -->
      <div>
        <transition name="fade">
          <div v-if="this.showPopup" class="popup">
            <i class="fas fa-check"></i>
            <p v-if="type == 'search'" class="text">book added!</p>
            <p v-if="type !== 'search'" class="text">book removed</p>
          </div>
        </transition>
      </div>
      <!--  -->

      <!-- add or remove option -->
      <div v-if="type == 'search'" class="add-item row">
        <i class="fas fa-plus-circle" @click="addBookToList"></i>
        <p class="add">add to list</p>
      </div>

      <div v-if="type !== 'search'" class="add-item row">
        <i class="fas fa-times-circle" @click="removeBookFromList"></i>
        <p class="add">remove from list</p>
      </div>
      <hr>
    </div>
  </div>
</template>

<script>
// use this npm package for the stars, very handy
import StarRating from "vue-star-rating";
import { setTimeout } from "timers";
import vClickOutside from 'v-click-outside'

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
      info: this.book.volumeInfo,
      showPopup: false,
      // type: this.type
    };
  },
  directives: {
    clickOutside: vClickOutside.directive,
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
    closePopup() {
      this.showPopup = false;
    },
    // to add the book to list in Search component
    addBookToList() {
      console.log("emitting addBookToList");
      this.showPopup = true;
      this.$emit("addBookToList");

      setTimeout(() => {
        this.showPopup = false;
        this.$emit("closeDetail");
      }, 1400);
    },
    // to remove the book from list in Search component
    removeBookFromList() {
      console.log("emitting removeBookFromList");
      this.showPopup = true;
      this.$emit("removeBookFromList");

      setTimeout(() => {
        this.showPopup = false;
        this.$emit("closeDetail");
      }, 1400);
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$link-blue: rgb(0, 119, 255);

.book-detail {
  position: fixed;
  height: 400px;
  width: 70%;
  min-width: 300px;
  max-width: 500px;
  bottom: 30px;
  right: 50px;
  background-color: rgba(245, 245, 245, 0.9);
  box-shadow: 0px 0px 5px 2px rgba(5, 1, 71, 0.52);
  border-radius: 10px;
  overflow-y: scroll;
}
.popup {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;
  background-color: rgba(245, 245, 245, 0.98);
  box-shadow: 0px 0px 5px 2px rgba(5, 1, 71, 0.52);
  border-radius: 10px;
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
  width: 80%;
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
  padding: 10px;
  // color: black;
}
.add-item {
  margin: 10px 0px;
}

i {
  cursor: pointer;
  transition: all 0.3s ease;
  margin: 5px;
  font-size: 20px;
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
.fa-check {
  padding: 6px;
}
.alert {
  font-size: 12px;
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
  border-radius: 6px;
}

/* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: rgba(5, 120, 250, 0.95);
// }
</style>