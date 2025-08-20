<template>
  <span class="masked">
    <img :src="src" v-bind="$attrs" />
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    required: true
  }
});

const maskStyle = computed(() => (`url('${props.src}')`));
</script>

<style lang="scss" scoped>
.masked {
  display: inline-block;
  background-color: var(--button-color);

  mask: v-bind(maskStyle) center/95% no-repeat;
  -webkit-mask: v-bind(maskStyle) center/95% no-repeat;

  img {
    opacity: 0;
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>