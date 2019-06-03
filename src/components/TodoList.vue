<template>
  <div class="search-holder">
    <input
      type="text"
      class="search-input"
      placeholder="book, author, subject, keyword"
      v-model="newTodo"
      @keyup.enter="addTodo"
    >

    <transition-group
      name="fade"
      enter-active-class="animated fadeInUp"
      leave-active-class="animated fadeOutDown"
    >
      <todo-item
        v-for="(todo, index) in todosFiltered"
        :key="todo.id"
        :todo="todo"
        :index="index"
        :checkAll="!anyRemaining"
        @removedTodo="removeTodo"
        @finishedEdit="finishedEdit"
      ></todo-item>


    </transition-group>

    <div class="extra-container">
      <div>
        <label>
          <input type="checkbox" :checked="!anyRemaining" @change="checkAllTodos">
          Check all
        </label>
      </div>

      <div>{{ remaining }} items left</div>
    </div>

    <div class="extra-container">
      <div>
        <button :class="{active: filter == 'all'}" @click="filter = 'all'">All</button>
        <button :class="{active: filter == 'active'}" @click="filter = 'active'">Active</button>
        <button :class="{active: filter == 'completed'}" @click="filter = 'completed'">Completed</button>
      </div>

      <div>
        <transition name="fade">
          <button v-if="showClearCompletedButton" @click="clearCompleted">Clear Completed</button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import TodoItem from "./TodoItem";

export default {
  name: "BookList",
  components: {
    TodoItem
  },
  data() {
    return {
      newTodo: "",
      index: "",
      idForTodo: "3",
      beforeEditCache: "",
      filter: "",
      todos: [
        {
          id: 1,
          title: "Finish Vue Screencast",
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: "Take Over World",
          completed: false,
          editing: false
        }
      ]
    };
  },
  computed: {
    remaining() {
      return this.todos.filter(todo => !todo.completed).length;
    },
    anyRemaining() {
      return this.remaining !== 0;
    },
    todosFiltered() {
      if (this.filter == "all") {
        return this.todos;
      } else if (this.filter == "active") {
        return this.todos.filter(todo => !todo.completed);
      }
      if (this.filter == "completed") {
        return this.todos.filter(todo => todo.completed);
      }
    },
    showClearCompletedButton() {
      return this.todos.filter(todo => todo.completed).length > 0;
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false
      });

      this.todo = "";
      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      console.log(`removing todo # ${index}`);
      this.todos.splice(index, 1);
    },
    checkAllTodos() {
      this.todos.forEach(todo => {
        todo.completed = event.target.checked;
      });
    },
    clearCompleted() {
      this.todos = this.todos.filter(todo => !todo.completed);
    },
    finishedEdit(data) {
      this.todos.splice(data.index, 1, data.todo);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css");
.search-holder {
  width: 100%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.search-input {
  width: 100%;
  border-radius: 2px;
  border: 0.5px solid grey;
  padding: 8px;
  margin-bottom: 20px;
}

.extra-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  border-top: 1px solid lightgrey;
  padding-top: 14px;
  margin-bottom: 14px;
}
button {
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 8px;
  border: none;
  border-radius: 4px;
  margin: 4px;
  color: rgba(63, 63, 63, 0.8);
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgb(139, 142, 161);
    color: white;
  }
}
.completed {
  text-decoration: line-through;
  color: grey;
}
.active {
  background-color: rgb(153, 165, 238);
  color: white;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
