<script setup>
import { onMounted } from 'vue';
import MovieList from '@/components/MovieList.vue';

import { useMoviesStore } from "../stores/movies";

const moviesStore = useMoviesStore()

onMounted(() => {
    moviesStore.filter = {}
    moviesStore.fetchMovies()
})
</script>

<template>
    <v-card title="Movie List" >
        <MovieList
            :isLoading="moviesStore.isLoading"
            :movies="moviesStore.movies"
        />
    </v-card>
</template>