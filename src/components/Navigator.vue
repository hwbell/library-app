<template>
  <div class="navigator">
    
    <div>
      <h3 class="app-name" >Your Library</h3>
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

.navigator {
  // border: 1px solid;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  margin: 0;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.app-name {
  margin: 15px;
}
.links-holder {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-link {
  cursor: pointer;
  margin: 15px;
  font-size: 24px; 
}
</style>