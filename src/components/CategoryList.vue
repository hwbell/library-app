<template>
  <div class="category col float-left">
    <p class="category-title">{{list.title}}</p>
    <a class="category-item" v-for="(item, index) in list.links" :key="index">{{item}}</a>
  </div>
</template>

<script>
export default {
  name: "category-list",
  components: {
    // 
  },
  props: {
    list: {
      type: Object,
      required: true
    }
  },
  data() {
    // let { title, list } = this.list;
    return {
      // title,
      // list
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
.category {
  margin-top: 40px;
  min-width: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.category-title {
  font-weight: 600;
  font-size: 18px;
}
.category-item {
  font-size: 12px;
  margin-bottom: 10px; 
  color: rgb(0, 68, 255) !important;
  &:hover {
    color: rgb(0, 119, 255) !important;
  }
}
</style>