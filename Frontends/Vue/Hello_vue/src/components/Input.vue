<script setup>
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import TodoCard from './TodoCard.vue'
import {ref} from 'vue'
const cardId = ref("animatedCard")
let newTodo = ref("");
const emit = defineEmits(['addTodo'])
function addTodo() {
    console.log("EMITTING", newTodo.value);
    emit("addTodo", newTodo.value)
    document.querySelector('#animatedCard').classList.add("slide-down");
    setTimeout(() => {
        document.querySelector('#animatedCard').classList.remove("slide-down");
        newTodo.value = ""
    }, 900)
}
</script>
<template>
    <section id="Input">
        <section class="wrapper">
            <h1>Todo Lists.</h1>
            <div id="input-wrapper">
                <input type="text" v-model="newTodo" placeholder="Add new todo..." />
                <button @click="addTodo" id="addBtn">
                    <FontAwesomeIcon :icon="faPaperPlane" />
                </button>
            </div>
            <TodoCard :todo="newTodo" :id="cardId"/>
        </section>
    </section>
</template>
<style >
#Input {
    width: 100vw;
    height: 100vh;
    position: relative;
    z-index: 1;
    display:flex;
    justify-content: center;;
    align-items: center;;
    background-color: white;
}
#input-wrapper {
    border-bottom: 0.8px solid grey;
    height: 40px;    
    padding:10px;
}
input {
    height:100%;
    border:none;
    background-color: transparent;
}
input:focus {
    outline: none;;
}
#addBtn {
    border: none;
    background-color: #1d1d1d;
    border-radius: 100%;
    height: 40px;
    width:40px;
}
#addBtn svg {
    color:white;
}
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;;
    align-items: center;
    width:fit-content;
    height: fit-content;
}
</style>