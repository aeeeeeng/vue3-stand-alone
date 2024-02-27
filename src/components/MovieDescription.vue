<script setup>
import { computed } from "vue";
import router from "@/routes";

const props = defineProps({
    movie: Object,
    fullDescription: Boolean
})

const starRating = computed(() => {
    return props.movie.imdbrating &&
        parseInt(props.movie.imdbrating) / 10 * 5;
})
const listGenre = computed(() => {
    return props.movie.genre &&
        props.movie.genre.split(',')
})
const limitPlot = computed(() => {
    return props.movie.plot &&
        props.movie.plot.substring(0, 75) + '...';
})

const searchGenre = (genre) => {
    router.push({
        name: 'MovieSearchResult',
        query: { 
            genre_like: genre
        }
    })
}
</script>

<template>
    <v-card-item>
        <RouterLink :to="{ name: 'MovieDetails', params: { id: movie.id } }">
            <v-card-title>{{ movie.title }}</v-card-title>
        </RouterLink>

        <v-card-subtitle>
            <span class="me-1">{{ movie.actors }}</span>
        </v-card-subtitle>
    </v-card-item>

    <v-card-text>
        <v-row align="center" class="mx-0">
            <v-rating :model-value="starRating" color="amber" density="compact" half-increments readonly
                size="small"></v-rating>

            <div class="text-grey ms-4">{{ `${starRating} (${movie.imdbrating})` }}</div>
        </v-row>

        <div class="my-4 text-subtitle-1">
            <v-icon aria-hidden="false" size="small" color="error">
                mdi-map-plus
            </v-icon>
            {{ movie.country }}
        </div>

        <div>
            {{ fullDescription ? movie.plot : limitPlot }}
        </div>
    </v-card-text>

    <v-list v-if="fullDescription">
        <v-list-item color="primary">
            <template v-slot:prepend>
                <v-icon icon="mdi-account"></v-icon>
            </template>
            <v-list-item-title>
                {{ movie.director }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
            <template v-slot:prepend>
                <v-icon icon="mdi-flag-variant-outline"></v-icon>
            </template>
            <v-list-item-title>
                {{ movie.country }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
            <template v-slot:prepend>
                <v-icon icon="mdi-account-cancel"></v-icon>
            </template>
            <v-list-item-title>
                {{ movie.rated }}
            </v-list-item-title>
        </v-list-item>
        <v-list-item color="primary">
            <template v-slot:prepend>
                <v-icon icon="mdi-timer-outline"></v-icon>
            </template>
            <v-list-item-title>
                {{ movie.released }}
            </v-list-item-title>
        </v-list-item>
    </v-list>

    <v-divider class="mx-4 mb-1"></v-divider>

    <v-card-title>Genre</v-card-title>

    <div class="px-4">
        <v-chip-group>
            <v-chip v-for="genre in listGenre" :key="genre" @click="searchGenre(genre)">
                {{ genre }}
            </v-chip>
        </v-chip-group>
    </div>
</template>

<style scoped>
a {
    text-decoration: none;
    color: unset;
}
</style>
