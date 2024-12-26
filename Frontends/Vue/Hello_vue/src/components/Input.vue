<script setup>

</script>
<template>
    <section id="Input">
        <section class="wrapper">
            <h1>Todo Lists.</h1>
            <div id="input-wrapper">
                <input type="text" v-model="newTodo" placeholder="Add new todo..." />
                <button id="addBtn">></button>
            </div>
        </section>
    </section>
</template>
<style >
#Input {
    width: 100vw;
    height: 100vh;
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
.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;;
    align-items: center;
    width:fit-content;
    height: fit-content;
}
</style>