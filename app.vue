<template>
  <div class="wrapper">
    <ImageWithText
        :imageSrc=img
        title="Профессиональное управление инвестициями"
        sub-title="Ваш надежный партнер в мире финансов"
    />
  </div>
</template>

<script setup>
import ImageWithText from '~/components/Layouts/ImageWithText.vue';
import { useAssetUrl } from '~/composables/useAssetUrl';

const img = useAssetUrl('images/main_img.png');
</script>

<style>
.wrapper {
  max-width: 1200px;
}
</style>