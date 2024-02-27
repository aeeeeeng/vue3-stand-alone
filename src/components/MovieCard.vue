<script setup>
import MovieDescription from "./MovieDescription.vue";
const props = defineProps({
    movie: Object
})
</script>

<template>
    <v-card>
      <v-img
        cover
        height="200"
        :src="movie.poster" 
        :alt="movie.title"
      ></v-img>
      <MovieDescription :movie="movie" :fullDescription="false"></MovieDescription>
    </v-card>
</template>
