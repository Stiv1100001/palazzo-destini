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
/* .flip-card {
  perspective: 1000px;
} */

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
