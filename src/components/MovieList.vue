<script setup>
import MovieCard from "../components/MovieCard.vue";
import { useMoviesStore } from "../stores/movies";

const moviesStore = useMoviesStore()

</script>

<template>
    <v-container>
        <v-row>
            <v-col v-if="moviesStore.isLoading">
                <h1>Please wait</h1>
            </v-col>
            <v-col v-else v-for="movie in moviesStore.movies" :key="movie.id" cols="12" sm="4">
                <MovieCard :movie="movie" />
            </v-col>
        </v-row>    
    </v-container>
</template>