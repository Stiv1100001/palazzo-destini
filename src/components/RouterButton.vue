<template>
  <div class="d-flex justify-content-center align-items-center">
    <router-link :to="to">
      <button class="btn bg-white fw-bold p-3 text-uppercase border border-2">{{ text }}</button>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>

<style></style>
