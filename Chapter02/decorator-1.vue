<script setup>
  const $props=defineProps({
    label: {
      type: String,
      optional: true,
      default: 'Default Label'
    }
  });
</script>

<template>
  <h1>{{ $props.label }}</h1>
</template>

<style scoped></style>