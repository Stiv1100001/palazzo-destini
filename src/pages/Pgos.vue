<template>
  <Particles id="tsparticles" :particlesInit="particlesInit" :particlesLoaded="particlesLoaded" url="/particles.json" />
  <div class="container mt-3">
    <div class="d-flex align-items-center justify-content-around">
      <div class="misterius">
        <RouterButton to="/" text="Home" class="" />
      </div>
      <div class="flex-grow-1">
        <h1 class="text-center text-white my-4 py-3 display-1 cardinal">PGOS</h1>
      </div>
      <div class="">
        <RouterButton to="/iscrizioni" text="Iscriviti" class="" />
      </div>
    </div>

    <div class="row row-cols-2 row-cols-md-3 gy-3 justify-content-center mb-4">
      <div class="col" v-for="index in 13" :key="index">
        <Tarot :up="`${index}.png`" :down="`${index}.png`"></Tarot>
      </div>
    </div>
  </div>
</template>

<script setup>
import Tarot from '../components/Tarot.vue';
import RouterButton from '../components/RouterButton.vue';
</script>

<style scoped>
.test {
  height: 200px;
}
</style>
