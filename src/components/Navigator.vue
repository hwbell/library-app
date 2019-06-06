<template>
  <div id="navigator">
    <p class="app-name">Your Library</p>

    <!-- media query for either a dropdown or text headers. -->
    <MqShow if="sm">
      <b-dropdown id="dropdown" text="Go to" variant="primary" class="m-md-2 dropdown">
        <b-dropdown-item>
          <a href="#reading-list" v-smooth-scroll="{offset: -140}">my list</a>
        </b-dropdown-item>
        <b-dropdown-item>
          <a href="#search" v-smooth-scroll="{offset: -140}">find more</a>
        </b-dropdown-item>
      </b-dropdown>
    </MqShow>

    <MqShow if="md!">
      <div class="links-holder">
        <p class="nav-link">
          <a href="#reading-list" v-smooth-scroll="{offset: -140}">my list</a>
        </p>
        <p class="nav-link">
          <a href="#search" v-smooth-scroll="{offset: -140}">find more</a>
        </p>
      </div>
    </MqShow>
  </div>
</template>

<script>
import Vue from "vue";

// npm package for smooth scrolling with links
import vueSmoothScroll from "vue2-smooth-scroll";
Vue.use(vueSmoothScroll);

export default {
  name: "navigator",
  components: {
    // MqShow
  },
  props: {
    //
  },
  data() {
    return {
      //
    };
  },
  methods: {
    //
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#navigator {
  z-index: 1;
  background-color: white;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  display: flex;
  padding: 10px 40px;
  justify-content: space-between;
  align-items: center;
}
.app-name {
  font-size: 28px;
  margin-left: 25px;
  // padding: 0px;
}
.links-holder {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.nav-link > a {
  cursor: pointer;
  margin: 15px;
  font-size: 24px;
  &:hover {
    text-decoration: none;
  }
}
.dropdown {
  margin: 10px;
}
</style>