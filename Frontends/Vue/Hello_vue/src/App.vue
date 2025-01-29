<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Input from './components/Input.vue';
import Lists from './components/Lists.vue';
import {ref, provide} from 'vue'
const todos = ref([])
const completed = ref([])
function handleTaskCompleted(key) {
  let completedTaskIndex = todos.value.filter((item, index) => {
    if(item.id == key) {
      return index
    }
  })
  let removedItem = todos.value.splice(completedTaskIndex[0], 1)
  completed.value.push(removedItem[0])
}
function handleUndoTask(key) {
  let taskIndex = completed.value.filter((item, index) => {
    if(item.id == key) {
      return index
    }
  })
  let removedItem = completed.value.splice(taskIndex[0], 1)
  todos.value.push(removedItem[0])
}
provide('handleTaskCompleted', handleTaskCompleted)
provide('handleUndoTask', handleUndoTask)
const handleAddTodo = (event) => {
  todos.value.push({
    item: event, 
    id: Math.floor(Math.random() * 100)
  })
}
const removeTodo = () => {
    if(todos.length > 0) { 
        //remove
    }
}
const removeCompleted = () => {

}
</script>

<template>
  <main>
      <Input @addTodo="handleAddTodo($event)"/>
      <Lists :todoList="todos" :completeList="completed" />
  </main>
</template>

<style scoped>

main {
  height: 100vh;
  width: 100vw;
}
</style>
