<script setup>
import Sidebar from "./components/Sidebar/Sidebar.vue";
</script>

<template>
  <div class="app">
    <Sidebar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.app {
  width: 100vw;
  height: 100vh;
  padding: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: 12rem auto;
}

main {
  overflow: hidden auto;
}
</style>
