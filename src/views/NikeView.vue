<script setup>
import ItemCard from '../components/ItemCard.vue'
import SelectButton from '../components/SelectButton.vue'
import { nikeData } from '../assets/data.js'
</script>

<template>
  <ItemCard :company="nikeData" />
  <SelectButton :company="nikeData" />
</template>
