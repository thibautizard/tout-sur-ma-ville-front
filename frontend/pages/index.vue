<script setup lang="ts">
// 🎨 Style
import '~/assets/css/main.css';

// 🧱 Components
import InputText from '@/components/ui/InputText.vue';

const title = 'Tout sur ma ville';
const city = ref('');
</script>

<template>
  <div class="flex flex-col items-center">
    <h2 class="text-7xl">{{ title }}</h2>
    <form action="">
      <InputText v-model="city" type="text" />
    </form>
  </div>
</template>

<style scoped>
h2 {
  font-family: Parisienne, sans-serif;
}
</style>
