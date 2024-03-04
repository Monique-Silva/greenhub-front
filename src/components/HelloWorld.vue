<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <img src="/src/assets/images/logo_greenhub.png" alt="Logo greenhub">
</template>

<style scoped>
img {
  display: flex;
  align-items: center;
}
</style>
