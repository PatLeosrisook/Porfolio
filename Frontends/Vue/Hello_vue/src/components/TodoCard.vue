 <script setup>
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faTrash } from '@fortawesome/free-solid-svg-icons';
    import {inject } from 'vue'
    defineProps({
    todo: String,
    id: String,
    cardKey: Number,
    mode: String,
    checked: Boolean,
    });
    const handleTaskCompleted = inject("handleTaskCompleted")
    const handleUndoTask = inject("handleUndoTask")
    function handleInputChange(e) {
        if(e.target.checked) {
            e.target.parentElement.parentElement.classList.add('slide-right')
            setTimeout(() => {
                e.target.parentElement.parentElement.classList.remove('slide-right')
                handleTaskCompleted(e.target.parentElement.parentElement.getAttribute('data-key'))
                
            }, 1000)
        } else {
            e.target.parentElement.parentElement.classList.add("slide-left")
            setTimeout(() => {
                e.target.parentElement.parentElement.classList.remove('slide-left')
                handleUndoTask(e.target.parentElement.parentElement.getAttribute('data-key'))
                
            }, 1000)
        }

    }
</script>
<template>
    <article :id="id" :data-key="cardKey" :class="`todo-card ${mode}`">
        <div class="card-wrapper">
            <input @change="e => handleInputChange(e)" :checked="checked" type="checkbox" :name="`todo-${cardKey}`"  />
            <label :for="`todo-${cardKey}`" class="todo-label">{{ todo }}</label>
            <FontAwesomeIcon :icon="faTrash" /> 

        </div>
    </article>
</template>
<style>
    .todo-card {
        width: 80%;
        height: 60px;
        min-height: fit-content;
        display:flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background-color: #f2f2f2;
        border-radius: 10px;
        padding: 10px;
    }
    .dark {
        background-color: #2c2c2c !important;
        color:white !important;
    }
    .card-wrapper{
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:100%;
        height:100%;
    }
    #animatedCard {
        position: absolute;
        z-index:-1;
        transform: translateY(100%);
        opacity: 0;
    }
    .slide-down {
        animation: slide-down-animation 1s ease-in-out forwards;
    }
    .slide-right {
        animation: slide-right-animation 1s ease-in-out forwards;
    }
    .slide-left {
        animation: slide-left-animation 1s ease-in-out forwards;
    }
    @keyframes slide-left-animation {
        0% {
            transform: translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(-100%);
            opacity: 0;
        }
    }
    @keyframes slide-right-animation {
        0% {
            transform:translateX(0);
            opacity: 1;
        }
        100% {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    @keyframes slide-down-animation {
        0% {
            transform: translateY(132%);
            opacity: 1;
        }
      
       
        100% {
            opacity: 0;
            transform: translateY(220%);
        }
    }
</style>