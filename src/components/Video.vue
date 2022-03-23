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
}

video {
  width: 50%;
}

@media screen and (max-width: 991px) {
  video {
    width: 75%;
  }
}

@media screen and (max-width: 768px) {
  video {
    width: 100%;
  }
}

.bg-black {
  background-color: black;
}
</style>
