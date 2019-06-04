<template>
  <!-- <img class="thumbnail" :src="this.url" alt="img"/> -->
  <div>
    <img
      class="thumbnail"
      :src="this.source.volumeInfo.imageLinks.thumbnail"
      alt="img"
      @click="showBookDetail"
    >
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    source: {
      type: Object,
      required: true
    }
  },
  methods: {
    showBookDetail() {
      console.log("emitting showBookDetail");
      this.$emit("showBookDetail", {
        book: this.source
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$link-blue: rgb(0, 119, 255);

.thumbnail {
  cursor: pointer;
  margin: 15px 0px;
  height: 100%;
  box-shadow: -2px 2px 5px 1px rgba(24, 24, 24, 0.2);
  transition: all 0.15s linear;
  &:hover {
    box-shadow: 0px 0px 5px 2px rgba(49, 42, 148, 0.52);
    -webkit-transform: translate(1px);
    -ms-transform: translate(1px);
    transform: translate(1px);
  }
}
</style>