<template>
  <div class="wrapper">
    <ImageWithText
        :imageSrc=img
        :logo=logo
        title="Профессиональное управление инвестициями"
        sub-title="Ваш надежный партнер в мире финансов"
    />
    <AboutUs />
  </div>
</template>

<script setup>
import ImageWithText from '~/components/layouts/ImageWithText.vue';
import AboutUs from '~/components/layouts/AboutUs.vue';
import { useAssetUrl } from '~/composables/useAssetUrl';

const img = useAssetUrl('images/main_img.webp');
const logo = useAssetUrl('images/logo.webp');
</script>

<style>
.wrapper {
  max-width: 1200px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}
</style>