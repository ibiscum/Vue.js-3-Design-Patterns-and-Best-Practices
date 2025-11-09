<script setup>
import { ref } from "vue";
import todoService from "../services/todo";
const $props = defineProps({
    modelValue: {
      type: Object,
      default: () => {
        return {};
      },
    },
  }),
  $emit = defineEmits(["update:modelValue"]),
  _item = ref({});

_item.value = { ...$props.modelValue };

function emitUpdate() {
  $emit("update:modelValue", _item.value);
}
</script>

<template>
  <div class="w3-cell-row w3-padding">
    <div class="w3-cell w3-padding">
      <strong>Description</strong>
      <input
        v-model="_item.text"
        type="text"
        class="w3-input w3-border"
        @blur="emitUpdate()"
      >
    </div>

    <div class="w3-cell w3-padding">
      <strong>Status</strong>
      <select
        v-model="_item.status"
        class="w3-select w3-border"
        @change="emitUpdate()"
      >
        <option
          v-for="state in todoService.getStatusList()"
          :key="state.id"
          :value="state.id"
        >
          {{ state.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<style scoped></style>
