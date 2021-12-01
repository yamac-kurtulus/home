<template>
  <div id="vue" class="h-16">
      <button class="text-white btn" @click="subtract()">-</button>
      <pre class="text-red-500" >{{ count }}</pre>
      <button class="text-white btn" @click="add()">+</button>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const count = ref(0)
    const add = () => count.value = count.value + 1;
    const subtract = () => count.value = count.value - 1;

    return {
      count,
      add,
      subtract
    }
  }
}
</script>
