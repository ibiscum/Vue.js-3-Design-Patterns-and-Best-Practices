<script setup>
import MainHeader from "./components/headers/MainHeader.vue"
import ToDoProject from "./components/ToDoProject.vue";
</script>

<template>
  <div class="app">
    <MainHeader />
    <main class="w3-container">
      <ToDoProject />
    </main>
  </div>
</template>

<style scoped>
.app {
    width: 100vw;
    min-height: 100vh;
    padding: 0;
}
</style>
