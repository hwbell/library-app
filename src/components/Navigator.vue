<template>
  <div id="navigator">
    
    <p class="app-name">Your Library</p>

    <div class="links-holder">
      <p class="nav-link">
        <a href="#reading-list" v-smooth-scroll>my list</a>
      </p>
      <p class="nav-link">
        <a href="#search" v-smooth-scroll>find more</a>
      </p>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "navigator",
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
  padding: 0px 40px;
  justify-content: space-between;
  align-items: center;
}
.app-name {
  font-size: 24px;
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
</style>