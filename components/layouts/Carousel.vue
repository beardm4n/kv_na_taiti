<template>
  <div class="carousel_wrapper">
    <Carousel v-bind="carouselConfig"
              :itemsToShow="visibleSlides">
      <Slide v-for="slide in products" :key="slide.title">
        <div>
          <Card v-bind="slide"/>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'

import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import Card from '~/components/layouts/Card.vue'

const visibleSlides = ref(3)

const carouselConfig = {
  wrapAround: true,
}

const products = [
  {
    title: 'Товар 1',
    description: 'Описание товара 1',
  },
  {
    title: 'Товар 2',
    description: 'Описание товара 2',
  },
  {
    title: 'Товар 3',
    description: 'Описание товара 3',
  },
  {
    title: 'Товар 4',
    description: 'Описание товара 4',
  },
  {
    title: 'Товар 5',
    description: 'Описание товара 5',
  },
  {
    title: 'Товар 6',
    description: 'Описание товара 6',
  }
]

const updateSlides = () => {
  if (window.innerWidth < 640) {
    visibleSlides.value = 1
  } else if (window.innerWidth < 860) {
    visibleSlides.value = 2
  } else {
    visibleSlides.value = 2.5
  }
}

onMounted(() => {
  updateSlides()
  window.addEventListener('resize', updateSlides)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateSlides)
})
</script>

<style scoped>
.carousel_wrapper {
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  padding-bottom: 12px;
  margin-top: 40px;
}

.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.3);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.3);
  --vc-nav-border-radius: 100%;
  max-height: 600px;
}

.carousel__pagination {
  bottom: -12px;
  padding-left: 0;
}
@media (min-width: 1024px) {
  .carousel__slide--active {
    .card {
      transform: scale(1.02);
      height: 500px;
      width: 450px;
    }
  }
}


@media (min-width: 960px) and (max-width: 1023px) {
  .carousel__slide--active {
    .card {
      transform: scale(1.02);
      height: 450px;
      width: 400px;
    }
  }
}

@media (max-width: 640px) {
  .carousel__slide--active {
    .card {
      transform: scale(1.02);
      height: 500px;
      width: 450px;
    }
  }
}

@media (max-width: 566px) {
  .carousel__slide--active {
    .card {
      transform: scale(1);
      width: 300px;
      height: 400px;
    }
  }
}

</style>