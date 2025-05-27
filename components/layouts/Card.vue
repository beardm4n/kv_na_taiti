<template>
  <div class="card">
    <h3 class="card_title">{{ title }}</h3>
    <p class="card_description">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>

<style scoped>
.card {
  width: 300px;
  height: 400px;
  padding: 16px;
  margin: 8px;
  background: #111820;
  border-radius: 12px;
  box-shadow: 0 0 8px 4px rgba(43, 54, 68, 0.2);
}

.card_title {
  margin: 0 0 4px;
  font-size: 18px;
}

.card_description {
  margin: 0;
  font-size: 14px;
  opacity: 0.8;
}
</style>
