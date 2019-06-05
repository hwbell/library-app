<template>
  <!-- <img class="thumbnail" :src="this.url" alt="img"/> -->
  <transition name="fade">
    <div>
      <img
        class="thumbnail"
        :src="this.source.volumeInfo.imageLinks.thumbnail"
        alt="img"
        @click="showDetail"
      >
    </div>
  </transition>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    source: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    showDetail() {
      console.log("emitting showBookDetail");
      this.$emit("showBookDetail", {
        book: this.source,
        type: this.type
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
  margin: 15px 10px;
  height: 150px;
  width: 100px;
  box-shadow: -2px 2px 5px 1px rgba(24, 24, 24, 0.2);
  transition: all 0.15s linear;
  &:hover {
    box-shadow: 0px 0px 5px 2px rgba(49, 42, 148, 0.52);
    -webkit-transform: translate(1px);
    -ms-transform: translate(1px);
    transform: translate(1px);
  }
}
// for the animation of the thumbnail
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>