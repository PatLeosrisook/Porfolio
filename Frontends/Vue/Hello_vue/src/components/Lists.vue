<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
</script>
<template>
    <section :id="Lists">
        <section class="list todos">
            <section class="list-header">
                <h2>Todos.</h2>
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
</template>