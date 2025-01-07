<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <section id="Lists">
        <section id="scroller">
            <section class="list todos">
                <section class="list-header">
                    <h2>Todos.</h2>
                    <div class="move-section">
                        <p>todos.</p>
                        <FontAwesomeIcon :icon="faArrowRight" />
                    </div>
                </section>
            </section>
            <section class="list completed">
                <section class="list-header">
                    <h2>Completed.</h2>
                    <div class="move-section">
                        <p>todos.</p>
                        <FontAwesomeIcon :icon="faArrowLeft" />
                    </div>
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
    
    }
    .list-header {
        display:flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width:100%;
        height: 15%;
    }
    .move-section {
        display:flex;
        flex-direction:row;
        align-items: center;
        height: fit-content;
    }
    .list {
        width:100vw;
        height:100%;
    }
</style>