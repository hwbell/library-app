<template>
  <div id="app">
    <div id="content">
      <Navigator/>

      <!--This is the master component for all things flowing from the user's search 
        Search will contain results of the the search, as well as the user's
      readingList, which is selected from the results-->
      <Search/>

      <!-- <Suggestions/> -->
    </div>
  </div>
</template>

<script>

import Vue from "vue";
// components
import Navigator from "./components/Navigator";
import Search from "./components/Search";

// tools
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue);

export default {
  name: "app",
  components: {
    Navigator,
    Search,
    // Suggestions
  },
  methods: {},
  data() {
    return {
      newSearch: ""
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Quicksand");
@import "node_modules/bootstrap/scss/bootstrap";
@import "node_modules/bootstrap-vue/src/index.scss";

$link-blue: rgb(0, 119, 255);

* {
  font-family: Quicksand;
  font-weight: lighter;
}
* > a {
  cursor: pointer;
  transition: all 0.3s ease;
  // text-decoration: none;
  color: $link-blue;
  &:hover {
    color: $link-blue;
  }
}
#app {
  // z-index: 0;
  min-height: 100vh;
  background: url("assets/books-bg.jpeg") no-repeat;
  background-size: 2000px 400px;
  background-position: 0% 120%;
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
#content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(255,255,255, 0.75)
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo {
  width: 50px;
  height: 50px;
}
</style>
