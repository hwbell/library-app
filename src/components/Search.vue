
<!-- Search is the master component for everything deriving from the user search -->

<template>
  <div id="search">
    <p id="ask">What do you feel like reading?</p>

    <div id="input-holder">
      <input
        type="text"
        id="search-input"
        v-model="query"
        placeholder="book, author, subject, keyword"
        @keyup.enter="fetchSearch"
      >
      <i class="fas fa-search"></i>
    </div>

    <div id="results" class="row">
      
      <div v-for="(result, index) in searchResults" :key="index" class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
        
        <div v-if="!!result.volumeInfo.imageLinks">
          <Thumbnail 
            :source="result.volumeInfo.imageLinks.thumbnail"
            :book="result"
            />
          
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import Vue from "vue";

// components
import Thumbnail from "./Thumbnail";

// tools
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(VueAxios, axios);

export default {
  name: "",
  components: {
    Thumbnail
  },
  props: {
    //
  },
  data() {
    return {
      query: "",
      searchResults: []
    };
  },
  methods: {
    // newSearch() {
    //   console.log(`new search emitted for ${this.query}`)
    //   this.$emit('new-search', {
    //     'query': this.query,
    //   })
    // },
    fetchSearch() {
      console.log(`fetching data for query: ${this.query}`);
      Vue.axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${this.query}`)
        .then(response => {
          console.log(response);
          this.searchResults = response.data.items;
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");
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
i {
  font-size: 24px;
  margin: 6px;
  color: rgb(0, 68, 255);
  cursor: pointer;
}
#results {
  width: 90%;
  margin: 30px;
}
</style>