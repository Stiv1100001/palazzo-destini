<template>
  <div class="row justify-content-center my-img">
    <div class="col-4 bg-white">
      <img :src="`/img/${image}`" alt=" test" class="img-fluid" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: {
    type: String,
  },
});
</script>

<style>
.my-img {
  filter: invert(100);
}
</style>
