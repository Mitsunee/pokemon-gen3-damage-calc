<template>
  <button
    @click="!disabled && $emit('btn-click')"
    :class="[color || '', disabled ? 'disabled' : '']"
    :aria-disabled="disabled">
    <slot>Button</slot>
  </button>
</template>

<script setup lang="ts">
import type { UiColor } from "@/types/enum";

defineProps<{
  color?: UiColor;
  disabled?: true;
}>();
</script>

<style scoped>
button {
  display: inline-block;
  border: 1px outset var(--ui-border);
  border-radius: 0.5rem;
  background-color: var(--ui-bg);
  font-family: inherit;
  color: var(--ui);
  transition: transform 0.1s ease-in-out;
}

button:not(.disabled):hover,
button:not(.disabled):focus {
  transform: scale(1.05);
}

button:not(.disabled):active {
  box-shadow: inset 0px 0.5px 1px var(--shadow);
}

button.disabled {
  opacity: 0.4;
  filter: grayscale(0.5);
}
</style>
