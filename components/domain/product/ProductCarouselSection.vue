<script setup lang="ts">
import { Carousel, Navigation, Slide } from "vue3-carousel";
</script>

<template>
  <!-- TODO: Featured Product Carousel Section -->
  <section class="relative -z-50">
    <Carousel>
      <template #slides>
        <Slide v-for="n in 10" :key="n">
          <div class="carousel__item">
            <!-- TODO: Use Real Data  -->
            <img
              class="-z-50"
              src="https://source.unsplash.com/random/800x600"
              alt="Random Unsplash Image"
            />
          </div>
        </Slide>
      </template>

      <template #addons>
        <navigation />
      </template>
    </Carousel>
  </section>
</template>

<style lang="scss" scoped>
.carousel__item {
  height: 180px;
  width: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 768px) {
    height: 200px;
  }

  @media (min-width: 1024px) {
    height: 300px;
  }
}
</style>
