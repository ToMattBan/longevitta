<template>
  <section class="logo-container">
    <img class="main-logo" src="../assets/logos/small_logo.png" alt="LGV" />
    <img :class="{ 'd-none': !showBoth }" src="../assets/logos/big_logo.png" alt="logo extenso" />
  </section>
</template>

<script setup lang="ts">
defineProps({
  showBoth: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang="scss" scoped>
.logo-container {
  text-align: center;

  .main-logo {
    width: 50%;
    margin-top: 32px;
    margin-bottom: 24px;
  }
}
</style>