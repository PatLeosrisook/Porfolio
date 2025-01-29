<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import TodoCard from './TodoCard.vue';
defineProps({
    todoList: Array,
    completeList: Array,
});
const generateID = () => {
    return Math.floor(Math.random() * 1000);
}
const moveSection = (side) => {
    
    let scroller = document.querySelector("#scroller");
    if(side == 'right') {
        if(scroller.classList.contains("move-left"))
            scroller.classList.remove("move-left");
        scroller.classList.add("move-right");
    } else {
        if(scroller.classList.contains("move-right"))
            scroller.classList.remove("move-right");
        scroller.classList.add("move-left");

    }
}
</script>
<template>
    <section id="Lists">
        <section id="scroller">
            <section class="list todos">
                <section class="list-header">
                    <h2>Todos.</h2>
                    <div @click="moveSection('right')" class="move-section">
                        <p>Completed.</p>
                        <FontAwesomeIcon :icon="faArrowRight" />
                    </div>
                </section>
                <section class="list-content">
                   <TodoCard 
                    v-for="(t) in todoList"
                    :key="t.id"
                    :todo="t.item"
                    :cardKey="t.id"
                    :checked="false"
                   />
                </section>
            </section>
            <section class="list completed">
                <section class="list-header">
                    <h2>Completed.</h2>
                    <div @click="moveSection('left')" class="move-section">
                        <p>Todos.</p>
                        <FontAwesomeIcon :icon="faArrowLeft" />
                    </div>
                </section>
                <section class="list-content">
                   <TodoCard 
                    v-for="(t) in completeList"
                    :key="t.id"
                    :todo="t.item"
                    :cardKey="t.id"
                    :mode="'dark'"
                    :checked="true"
                   />
                </section>
            </section>
        </section>
    </section>
</template>
<style >
    #scroller {
        width:fit-content;
        height:100vh;
        display:flex;
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        overflow-y: hidden;
    }
    #Lists {
        height: 100vh;
        width: 100%;
        overflow:hidden;
        
    }
    .list-header {
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:100%;
        height: 15%;
    }
    .list-content {
        height: 80vh;
        width: 100%;
        display:flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap:10px;
    }

    .completed {
        background-color: #1d1d1d;
        color:white;
    }
    .completed .list-header .move-section , .completed .move-section svg{
        order: 1;
    }
    
    .completed .list-header h2 , .completed .move-section p{
        order: 2;
    }
    
    .move-section {
        display:flex;
        flex-direction:row;
        align-items: center;
        height: fit-content;
        gap:5px;
    }
    .move-right {
        transform:translateX(-50%);
        transition: transform 0.5s ease;
    }
    .move-left {
        transform:translateX(0%);
        transition: transform 0.5s ease;
        
    }
    .list {
        width:100vw;
        height:100%;
    }
</style>