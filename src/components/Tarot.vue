<template>
  <div class="flip-card" :class="rotated ? 'rotated' : ''" @click="rotated = !rotated">
    <div class="flip-card-inner w-100 h-100 position-relative">
      <div class="flip-card-front position-absolute w-100 h-100">
        <img :src="`/img/tarots/down/${down}`" alt="Tarot" class="img-fluid rounded-3" />
      </div>
      <div class="flip-card-back w-100 h-100">
        <img :src="`/img/tarots/up/${up}`" alt="Tarot" class="img-fluid rounded-3" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const rotated = ref(false);

const props = defineProps({
  up: {
    type: String,
    required: true,
  },
  down: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.flip-card {
  transition: box-shadow 0.5s, filter 0.5s;
  filter: brightness(0.9);
}
.flip-card:hover {
  box-shadow: 0 0 0.5rem 0.25rem white;
  filter: brightness(1.25);
}

.flip-card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.flip-card.rotated .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
