<script setup lang="ts">
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

const items = [
  {
    id: 1,
    name: "Product 1",
    price: 10000,
    image: "https://i.imgur.com/xUm9QEE.png",
  },
  {
    id: 2,
    name: "Product 2",
    price: 20000,
    image: "https://source.unsplash.com/random/800x300",
  },
  {
    id: 3,
    name: "Product 3",
    price: 30000,
    image: "https://source.unsplash.com/random/800x300",
  },
  {
    id: 4,
    name: "Product 4",
    price: 40000,
    image: "https://source.unsplash.com/random/800x300",
  },
  {
    id: 5,
    name: "Product 5",
    price: 50000,
    image: "https://source.unsplash.com/random/800x300",
  },
  {
    id: 6,
    name: "Product 6",
    price: 60000,
    image: "https://source.unsplash.com/random/800x300",
  },
  {
    id: 7,
    name: "Product 7",
    price: 70000,
    image: "https://source.unsplash.com/random/800x300",
  },
  {
    id: 8,
    name: "Product 8",
    price: 80000,
    image: "https://source.unsplash.com/random/800x300",
  },
  {
    id: 9,
    name: "Product 9",
    price: 90000,
    image: "https://source.unsplash.com/random/800x300",
  },
  {
    id: 10,
    name: "Product 10",
    price: 100000,
    image: "https://source.unsplash.com/random/800x300",
  },
];
</script>

<template>
  <!-- TODO: Featured Product Carousel Section -->
  <section class="relative -z-50">
    <carousel>
      <template #slides>
        <slide v-for="item in items" :key="item.id">
          <div class="carousel__item">
            <!-- TODO: Use Real Data  -->
            <img class="-z-50" :src="item.image" alt="Random Unsplash Image" />
          </div>
        </slide>
      </template>

      <template #addons>
        <Pagination />
        <Navigation />
      </template>
    </carousel>
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
