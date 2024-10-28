<script setup>
import ItemCard from '../components/ItemCard.vue'
import SelectButton from '../components/SelectButton.vue'
import { adidasData } from '../assets/data.js'
</script>

<template>
  <ItemCard :company="adidasData" />
  <SelectButton :company="adidasData" />
</template>
