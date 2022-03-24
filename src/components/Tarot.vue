<template>
  <div class="flip-card rounded-3" :class="rotated ? 'rotated' : ''" @click="rotated = !rotated">
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
import { Howl } from 'howler';
import { watch } from 'vue';

const rotated = ref(false);
const howl = new Howl({
  src: ['sound/Card.mp3'],
  volume: 0.3,
});
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

watch(rotated, () => {
  howl.play();
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

.flip-card.rotated {
  animation: ligth 0.5s linear;
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

@keyframes ligth {
  0% {
    box-shadow: 0 0 0.5rem 0.25rem white;
  }

  10% {
    box-shadow: none;
  }

  90% {
    box-shadow: none;
  }

  100% {
    box-shadow: 0 0 0.5rem 0.25rem white;
  }
}
</style>
