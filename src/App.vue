<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/adidas">Adidas</RouterLink>
      <RouterLink to="/nike">Nike</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
