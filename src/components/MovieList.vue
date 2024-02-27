<script setup>
import MovieCard from "../components/MovieCard.vue";

const props = defineProps({
    isLoading: Boolean,
    movies: Array    
})

</script>

<template>
    <v-container>
        <v-row>
            <v-col v-if="isLoading">
                <h1>Please wait</h1>
            </v-col>
            <v-col v-else v-for="movie in movies" :key="movie.id" cols="12" sm="4">
                <MovieCard :movie="movie" />
            </v-col>
        </v-row>    
    </v-container>
</template>