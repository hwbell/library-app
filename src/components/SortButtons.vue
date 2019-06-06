<template>

  <div id="sort-buttons">
    <p class="text">sort by: </p>

    <b-button class="sort" @click="sortReadingList('title')" >Title</b-button>
    <b-button class="sort" @click="sortReadingList('author')" >Author</b-button>
    <b-button class="sort" @click="sortReadingList('date')" >Newest</b-button>

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
    sortReadingList(data) {
      console.log(`emitting sortReadingList with sortBy = ${data}`)
      this.$emit('sortReadingList', {
        sortBy: data
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");
#sort-buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
}
.text {
  margin: 6px;
}
.sort {
  margin-left: 4px;
  padding: 4px;
  border: none;
}

</style>