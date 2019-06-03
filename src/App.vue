<template>
  <div id="app">

    <!-- for the image overlay -->
    <!-- <div class="overlay"></div> -->

    <Navigator/>
    
    <!-- the master component for all things flowing from the user's search -->
    <Search />

    <!-- <ReadingList :list="this.mylist"/> -->

    <Suggestions/>
  </div>
</template>

<script>
// components
import Navigator from "./components/Navigator";
import Search from "./components/Search";
import Suggestions from "./components/Suggestions";

// tools
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

export default {
  name: "app",
  components: {
    Navigator,
    Search,
    Suggestions
  },
  methods: {
    
  },
  data() {
    return {
      newSearch: "",
      
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

* {
  font-family: Quicksand;
  font-weight: lighter;
}
* > a {
  cursor: pointer;
  transition: all 0.3s ease;
  // text-decoration: none;
  color: rgb(0, 68, 255);
  &:hover {
    color: rgb(0, 119, 255);
  }
}
#app {
  // z-index: 0;
  min-height: 100vh;
  background: url("assets/books-bg.jpeg") no-repeat;
  background-size: 1600px 400px;
  background-position: center bottom;
  background-attachment: fixed;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
// .overlay {
//   position: fixed;
//   z-index: 0;
//   background-color: rgba(255,255,255,0.6);
//   width: 100%;
//   height: 100%;
//   top: 0px;
//   left: 0px;
// }
.logo {
  width: 50px;
  height: 50px;
}
</style>
