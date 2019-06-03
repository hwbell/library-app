<template>
  <!-- <img class="thumbnail" :src="this.url" alt="img"/> -->
  <div>
    <img class="thumbnail" :class="{ higlighted : highlighted }" :src="this.source" alt="img" @click="showBookDetail">
  </div>
</template>

<script>
export default {
  name: "Thumbnail",
  props: {
    source: {
      type: String,
      required: true
    }
  },
  data() {
    console.log(this.url);
    return {
      // 'source': this.source,
      // 'url': this.url
    };
  },
  computed: {
    // url() {
    //   return this.url;
    // }
  },
  methods: {
    //
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// @import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");
.thumbnail {
  margin: 15px 0px;
  box-shadow: -3px 3px 5px 1px rgba(24, 24, 24, 0.2);
}

</style>