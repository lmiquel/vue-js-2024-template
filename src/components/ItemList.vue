<script setup>
import ItemCard from './ItemCard.vue'
import { books } from '../assets/data.js'
</script>

<template>
  <div v-for="book in books">
    <ItemCard :book="book" />
  </div>
</template>
