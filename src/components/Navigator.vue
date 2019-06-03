<template>
  <div class="navigator">
    
    <div class="app-name">
      <h3>Your Library</h3>
    </div>

    <div class="links-holder">
      <h5 class="nav-link">
        <a href="#reading-list">my list</a>
      </h5>
      <h5 class="nav-link">
        <a href="#search">find more</a>
      </h5>
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
// @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");
.navigator {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.links-holder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-link {
  cursor: pointer;
  // font-
}
</style>