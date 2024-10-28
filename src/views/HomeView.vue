<script setup>
import ItemCard from '../components/ItemCard.vue'
import { useCompanyStore } from '../stores/companies.js'

const companyStore = useCompanyStore()
</script>

<template>
  <p>Faire apparaître ci-dessous l'entrerpise sélectionnée</p>
  <ItemCard />
</template>
