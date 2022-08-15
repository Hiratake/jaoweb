<script setup lang="ts">
// import reset stylesheet
import 'ress'
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  transition-duration: 0.1s;
  transition-property: color, background-color;
}

html {
  scroll-behavior: smooth;
}
</style>
