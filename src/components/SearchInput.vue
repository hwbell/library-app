<template>

  <div id="search">
    
    <p id="ask">What do you feel like reading?</p>

    <div id="input-holder">
      <input type="text" id="search-input" placeholder="book, author, subject, keyword">
      <i class="fas fa-search"></i>
    </div>

  </div>

</template>

<script>
export default {
  name: "",
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
#search {
  width: 100%;
  margin-top: 100px;
}
#input-holder {
  display: flex;
  justify-content: center;
}
#search-input {
  padding-left: 15px;
  width: 250px;
  height: 25px;
  border: 1px solid lightgrey;
  border-radius: 20px;
  &:focus {
    outline: none;
  }
}
#ask {
  font-size: 18px
}
i {
  margin: 4px;
  color: rgb(0, 68, 255);
  cursor: pointer;
}

</style>