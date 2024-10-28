<script setup>
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
</script>

<template>
  <v-card class="mx-auto my-8" elevation="16" max-width="344">
    <v-card-item>
      <v-card-title>
        {{ company.name }}
      </v-card-title>

      <v-card-subtitle>
        Nombre d'employés: {{ company.employees }}
      </v-card-subtitle>
    </v-card-item>

    <v-card-text>
      Fondée en {{ company.founded }}, par {{ company.founders }}, le siège se
      trouve à {{ company.headquarters }}
    </v-card-text>

    <v-btn :href="company.website" text="Website"></v-btn>
  </v-card>
</template>
