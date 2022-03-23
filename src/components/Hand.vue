<template>
  <div class="container text-center text-white my-5 fs-3">
    <div class="d-flex flex-column align-items-center">
      <img src="/img/gnagna.png" alt="" />
      <p class="italian sized m-0" v-html="text"></p>
      <img src="/img/gnagna.png" alt="" class="" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
  },
});
</script>

<style scoped>
img {
  filter: invert(100);
  width: 20%;
}

.sized {
  max-width: 50%;
}
</style>
