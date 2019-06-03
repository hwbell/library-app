<template>
  <div id="app">
    <Navigator/>
    <img class="logo" alt="Vue logo" src="./assets/logo.png">

  </div>
</template>

<script>

// components
import Navigator from "./components/Navigator.vue";

// tools
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

export default {
  name: "app",
  components: {
    Navigator
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 24px;
  max-width: 650px;
  margin: 0 auto;
}
.logo {
  width: 50px;
  height: 50px;
}
</style>
