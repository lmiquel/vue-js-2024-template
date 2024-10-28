<script setup>
const props = defineProps({
  book: {
    title: '',
    author: '',
    year: 0,
  },
})
</script>

<template>
  <v-card>
    <v-title>{{ book.title }}</v-title>
    <v-body>
      <p>{{ book.author }}, {{ book.year }}</p>
    </v-body>
  </v-card>
  <br />
</template>
