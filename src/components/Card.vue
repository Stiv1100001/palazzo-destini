<template>
  <div class="row justify-content-center card-bg py-2">
    <div class="col-12 col-md-10 col-lg-8 text-center">
      <span class="display-3 cardinal">{{ title }}</span>
    </div>
    <div class="col-8 border-bottom border-1 border-dark my-3"></div>
    <div class="col-10 col-lg-7 text-center">
      <p v-if="incipit.length > 0" class="fst-italic" v-html="incipit"></p>
      <button class="btn border border-1 mb-3" @click="display = !display">{{ display ? 'Chiudi' : 'Espandi' }}</button>
    </div>
    <div class="col-10 col-lg-8 overflow-hidden expandable" :class="display ? `text-${align}` : `text-${align} h-0`">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from '@vue/reactivity';

const display = ref(false);
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  incipit: {
    type: String,
    default: '',
  },
  align: {
    type: String,
    default: 'center',
  },
});
</script>

<style scoped>
.card-bg {
  background: linear-gradient(
    90deg,
    var(--bg) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 70%,
    var(--bg) 100%
  );
}

.expandable {
  transition: max-height linear 0.2;
}

.h-0 {
  max-height: 0;
}
</style>
