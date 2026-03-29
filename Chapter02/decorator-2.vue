<script setup>
import HeaderH1 from "./decorator-1.vue"
const $props = defineProps({
  label: {
    type: String,
    required: true,
    default: 'Default Label'
  }
})
</script>

<template>
  <div style="color: purple;">
    <HeaderH1 :title="$props.label + '!!!'" />
  </div>
</template>

<style scoped></style>