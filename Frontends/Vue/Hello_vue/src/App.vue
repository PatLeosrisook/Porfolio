<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Input from './components/Input.vue';
import Lists from './components/Lists.vue';
</script>

<template>

  <main>
      <Input />
      <Lists/>
  </main>
</template>

<style scoped>

main {
  height: 100vh;
  width: 100vw;
}
</style>
