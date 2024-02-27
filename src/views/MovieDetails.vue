<script setup>
import { onMounted } from "vue";
import { useMoviesStore } from "../stores/movies";
import MovieImages from "../components/MovieImages.vue";
import MovieDescription from "@/components/MovieDescription.vue";

const props = defineProps({
    id: {
        type: String,
        required: true
    }
})

const moviesStore = useMoviesStore();

onMounted(() => {
    moviesStore.findMovies(props.id);
    moviesStore.selectedImage = 0
})

const selectImage = (selected) => {
    moviesStore.selectedImage = selected
}

</script>

<template>
    <v-card>
        <v-card-title class="d-flex justify-space-between">
            <span>
                Description of {{ moviesStore.movie.title }}
            </span>
            <v-btn @click="$router.back()" icon="mdi-close" variant="text"></v-btn>
        </v-card-title>
        <v-container>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-img
                        class="bg-white"
                        :aspect-ratio="1"
                        :src="moviesStore.mainImage"
                        cover
                    ></v-img>
                    <MovieImages 
                        :images="moviesStore.allImagesMovie" 
                        :selectImage="selectImage"
                    />
                </v-col>
                <v-col cols="12" sm="6">
                    <MovieDescription 
                        :movie="moviesStore.movie" 
                        :fullDescription="true" />
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>