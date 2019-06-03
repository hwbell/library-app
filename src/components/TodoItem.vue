<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input type="checkbox" v-model="completed" @change="doneEdit">

      <div
        class="todo-item-label"
        :class="{ completed : completed }"
        v-if="!editing"
        @dblclick="editTodo"
      >{{title}}</div>

      <input
        v-else
        class="todo-item-edit"
        type="text"
        v-model="title"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="escapeEdit"
        v-focus
      >
    </div>

    <div class="remove-item" @click="removeTodo(index)">&times;</div>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      'id': this.todo.id,
      'title': this.todo.title,
      'completed': this.todo.completed,
      'editing': this.todo.editing,
      'beforeEditCache': ""
    };
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  // watches for prop changes
  watch: {
    checkAll() {
      this.completed = this.checkAll ? true : this.todo.completed;
    }

  },
  methods: {
    removeTodo(index) {
      this.$emit('removedTodo', index)
    },
    editTodo() {
      this.beforeEditCache = this.title;
      this.editing = true;
    },
    escapeEdit() {
      this.title = this.beforeEditCache;
      this.editing = false;
    },
    doneEdit() {
      if (this.title.trim == "") {
        this.title = this.beforeEditCache;
      }
      this.editing = false;
      this.$emit('finishedEdit', {
        'index': this.index,
        'todo': {
          'id': this.id,
          'title': this.title,
          'completed': this.completed,
          'editing': this.editing
        }
      })
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");
.todo-item {
  animation-duration: 0.3s;
  width: 100%;
  margin: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.todo-item-left {
  display: flex;
  align-items: center;
}
.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}
.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  &:focus {
    outline: none;
  }
}
.remove-item {
  cursor: pointer;
  &:hover {
    color: blueviolet;
  }
}

</style>

