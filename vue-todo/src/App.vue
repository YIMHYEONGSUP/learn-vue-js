<template>
  <div id="app">
    <TodoHeader/>
    <TodoInput/>
    <TodoList/>
    <TodoFooter/>
  </div>
</template>

<script>

import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

//  helper function 



export default {
  data(){ // state
    return {
     
    }
  },
  
  methods: { // mutations

  },
  components: { 
    TodoHeader,
    TodoFooter,
    TodoInput,
    TodoList,
  }
}
</script>

<style>
body{
  text-align: center;
  background-color: #f6f6f6;
}
input{
  border-style: groove;
  width: 200px;
}
button{
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
}
</style>