<script setup>
import { useCompanyStore } from '../stores/companies.js'

const props = defineProps({
  company: {
    name: '',
    founded: '',
    founders: '',
    headquarters: '',
    slogan: '',
    employees: 0,
    website: '',
  },
})

const companyStore = useCompanyStore()

const setCompanyInStore = () => {}
</script>

<template>
  <v-btn @click="setCompanyInStore">SELECT</v-btn>
</template>
