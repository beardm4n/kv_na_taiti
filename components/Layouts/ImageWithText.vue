<template>
  <div class="image-with-text">
    <div class="image-container">
      <img :src="imageSrc" alt="Image" class="image" />

      <div class="overlay">
        <span class="text_title">{{ title }}</span>
        <span class="text_subtitle">{{ subTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imageSrc: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.image-with-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container {
  position: relative;
  max-width: 100%;
}

.image {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover; /* Заполняет контейнер без искажения пропорций */
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.text_title {
  font-size: 3rem;
  text-align: center;
  padding: 20px;
  width: min-content;
}

.text_subtitle {
  font-size: 1.5rem;
  text-align: center;
  padding: 20px;
}

@media (max-width: 768px) {
  .text_title {
    font-size: 1.5rem;
  }
  .text_subtitle {
    font-size: 1rem;
  }
}

</style>
