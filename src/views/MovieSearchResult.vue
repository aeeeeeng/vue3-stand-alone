<script setup>
import { onMounted } from 'vue';
import MovieList from '@/components/MovieList.vue';
import { useRoute } from 'vue-router';
import { useMoviesStore } from "../stores/movies";
import router from "../routes";

const route = useRoute();
const queryParams = route.query
const moviesStore = useMoviesStore()

onMounted(() => {
    moviesStore.filter = queryParams
    moviesStore.fetchMovies()
})

const close = () => {
    router.push({
        name: 'Movies'
    })
}
</script>

<template>
    <v-card >
        <v-card-title class="d-flex justify-space-between">
            <span>
                Result Filter {{ moviesStore.stringFilter }}
            </span>
            <v-btn @click="close" icon="mdi-close" variant="text"></v-btn>
        </v-card-title>
        <MovieList
            :isLoading="moviesStore.isLoading"
            :movies="moviesStore.movies"
        />
    </v-card>
</template>