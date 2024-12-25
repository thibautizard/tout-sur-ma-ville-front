<script>
import '~/assets/css/main.css'
import InputText from 'primevue/inputtext';

const value="test";
</script>
<template>
  <p class="text-7xl mb-2">Tout sur ma ville</p>
  <InputText type="text" v-model="value" />
</template>
<style scoped>
  p {
    font-family: Parisienne, sans-serif;
  }
</style>
