<template>
  <div class="container mt-3">
    <h1 class="text-center text-white my-4 py-3 display-1 cardinal">PGOS</h1>

    <div class="row row-cols-3 row-cols-sm-4 gy-3">
      <div class="col" v-for="index in 13" :key="index">
        <Tarot :up="`${index}.png`" :down="`${index}.png`"></Tarot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tarot from '../components/Tarot.vue';
</script>

<style scoped>
.test {
  height: 200px;
}
</style>
