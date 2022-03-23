<template>
  <section id="video" class="bg-black d-flex justify-content-center">
    <video controls autoplay loop>
      <source src="/video/IlPalazzodeiDestini.mp4" type="video/mp4" />
    </video>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#video {
  max-width: 100vw;
  height: 50vh;
}

video {
  width: 50%;
}

.bg-black {
  background-color: black;
}
</style>
