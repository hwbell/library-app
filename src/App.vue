<template>

  <div id="app">
  
    <Navigator/>
    <SearchInput />
    <Suggestions />

  </div>


  

</template>

<script>

// components
import Navigator from "./components/Navigator.vue";
import SearchInput from './components/SearchInput';
import Suggestions from './components/Suggestions';

// tools
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios);

export default {
  name: "app",
  components: {
    Navigator,
    SearchInput,
    Suggestions
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Quicksand');
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';

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
    color: rgb(0, 119, 255)
  }
}
#app {
  background-image: url("./assets/books-bg.jpeg");
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 50px;
  height: 50px;
}
</style>
