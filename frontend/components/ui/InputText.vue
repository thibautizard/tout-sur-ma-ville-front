<script setup lang="ts">
// 🧱 Components
import InputText from 'primevue/inputtext';

const value = defineModel<string | number>();
</script>

<template>
  <InputText v-model="value" type="text" />
</template>
