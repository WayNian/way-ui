<template>
  <button>
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "WButton",
};
</script>
<script setup lang="ts"></script>

<style lang="scss" scoped>
button {
  border-radius: 0.25em;
  border: 1px solid #ccc;
  padding: 0.5em 1em;
  font-size: 1em;
  cursor: pointer;
  will-change: filter;
}
</style>
