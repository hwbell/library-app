<template>

  <div class="row" id="suggestions">

    <CategoryList v-for="(item, index) in suggestions" :key="index" :list="item"/>

  </div>

</template>

<script>
import Vue from 'vue';
import CategoryList from './CategoryList';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue)

const suggestions = [
  {
    title: 'Genres',
    links: ['Fiction', 'Travel', 'History', 'Science']
  },
  {
    title: 'Authors',
    links: ['Sarah Blake', 'Barbara Fields', 'Howard Zinn', 'Michio Kaku']
  },
  {
    title: 'Classics',
    links: ['Brave New World', 'Into Thin Air', 'Guns, Germs, and Steel', 'A Brief History of Time']
  },
  {
    title: 'Trending',
    links: ['Until Then', 'Bad Blood', 'On Desperate Ground', 'George R. R. Martin']
  }
]

export default {
  name: "suggestions",
  components: {
    CategoryList
  },
  props: {
  // 
  },
  data() {
    return {
      suggestions
    };
  },
  methods: {
    // 
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

$link-blue: rgb(0, 119, 255);

#suggestions {
  width: 100%;
  padding: 20px;
  background-color: rgba(255,255,255,0.9);
  // margin-bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; 
}


</style>