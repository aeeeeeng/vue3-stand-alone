<script setup>
import { onMounted } from 'vue';
import MovieCard from "../components/MovieCard.vue";
import { useMoviesStore } from "../stores/movies";

const moviesStore = useMoviesStore()

onMounted(() => {
    moviesStore.fetchMovies()
})
</script>

<template>
    <h1>Movies total : {{ moviesStore.totalMovies }}</h1>
    <div v-if="moviesStore.isLoading" class="max-w-sm mx-auto">
        <span class="text-2xl font-bold text-indigo-700">Is Loading...</span>
    </div>
    <div v-else class="grid grid-cols-3 gap-4">
        <MovieCard v-for="movie in moviesStore.movies" :key="movie.id" :movie="movie" />
    </div>
</template>