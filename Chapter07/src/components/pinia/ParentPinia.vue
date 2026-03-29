<script setup>
import { useCounterStore } from "../../stores/counter";
import Child from "./ChildPinia.vue";

const $store = useCounterStore();
</script>

<template>
  <div>
    <p>
      The central store provides more than just reactive state... also
      encapsulates logic.
    </p>
    <div class="padding with-background">
      <h4>Parent Pinia Example</h4>
      <code>
        {{ $store }}
      </code>
      <div class="semi-padding">
        <button @click="$store.increment">
          Increment
        </button>
        <button
          :disabled="!$store.inRange"
          @click="$store.decrement"
        >
          Decrement
        </button>
        <span v-show="!$store.inRange">Allowed range are natural numbers including zero</span>
      </div>

      <div class="padding flex-container flex-wrap">
        <Child />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
