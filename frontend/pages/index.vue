<script setup>
import '~/assets/css/main.css';
import InputText from 'primevue/inputtext';

const value = 'test';
</script>
<template>
  <div class="flex flex-col items-center">
    <h2 class="text-7xl">Tout sur ma ville</h2>
    <InputText v-model="value" type="text" />
  </div>
</template>
<style scoped>
h2 {
  font-family: Parisienne, sans-serif;
}
</style>
