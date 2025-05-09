<template>
  <div class="wrapper">
    <ImageWithText
        :imageSrc=img
        :logo=logo
        title="Профессиональное управление инвестициями"
        sub-title="Ваш надежный партнер в мире финансов"
    />
  </div>
</template>

<script setup>
import ImageWithText from '~/components/layouts/ImageWithText.vue';
import { useAssetUrl } from '~/composables/useAssetUrl';

const img = useAssetUrl('images/main_img.png');
const logo = useAssetUrl('images/logo.png');
</script>

<style>
.wrapper {
  max-width: 1200px;
}
</style>