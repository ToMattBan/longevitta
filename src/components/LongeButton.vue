<template>
  <button :class="variant" v-bind="$attrs">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps({
  variant: {
    type: String,
    required: true,
    validator(value: string) {
      return ['primary', 'secondary'].includes(value)
    }
  }
})
</script>

<style lang="scss" scoped>
button {
  color: white;
  font-size: 1.8em;
  border-radius: 30px;
  border: none;
  padding: 8px 32px;

  &.primary {
    background-color: var(--color-primary);
  }

  &.secondary {
    background-color: var(--color-secondary);
  }
}
</style>