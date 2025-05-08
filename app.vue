<template>
  <div class="wrapper">
    <ImageWithText
        imageSrc="/images/main_img.png"
        title="Профессиональное управление инвестициями"
        sub-title="Ваш надежный партнер в мире финансов"
    />
  </div>
</template>

<script setup>
import ImageWithText from '~/components/Layouts/ImageWithText.vue';
</script>

<style>
.wrapper {
  max-width: 1200px;
}
</style>