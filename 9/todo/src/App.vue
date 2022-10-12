
<template>
  <div id="app">
    <div class="input-area">
      <input type="text" v-model="inputValue">
      <button class="btn" @click="addNewTodo">Add</button>
    </div>
    <div class="todos" v-for="(item, index) in todos" :key="index">
      <InputComponent :data="item"></InputComponent>
      <button class="btn" @click="remove(index)">delete</button>
    </div>
  </div>
</template>

<script>
import InputComponent from './components/InputComponent.vue'
export default {
  name: 'App',
  components: {
    InputComponent
  },
  data() {
    return {
      inputValue: '',
      todos: []
    }
  },
  methods: {
    addNewTodo() {
      this.todos.push(this.inputValue)
      setTimeout(() => {
        this.inputValue = ''
      }, 1000)
    },
    // remove(index){
    //   this.todos = this.todos.filter((el, ind) => index != ind)
    // },
    remove(index){
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>
#app {
  background-color: rgb(195, 195, 195);
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
}

.input-area,
.todos {
  width: 30%;
  height: 20px;
  margin: auto;
  padding-top: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.todos {
  padding-top: 50px;
}

.input-area input,
.todos input {
  padding: 20px;
  border-radius: 10px;
  width: 100%;
}

.btn {
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
}
</style>
