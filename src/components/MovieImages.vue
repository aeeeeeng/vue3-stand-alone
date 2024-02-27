<script setup>
import { useMoviesStore } from "../stores/movies";
const moviesStore = useMoviesStore()
const props = defineProps({
    images: Array,
    title: String
})
</script>

<template>
    <v-slide-group v-model="moviesStore.selectedImage" show-arrows>
        <v-slide-group-item v-for="(image, i) in images" :key="image">
            <v-card 
                :color="moviesStore.selectedImage === i ? 'primary' : 'grey-lighten-1'" 
                height="100" 
                width="100"
                class="ma-4" 
                @click="moviesStore.selectedImage = i">
                <v-img
                    :aspect-ratio="1"
                    :src="image"
                    cover
                ></v-img>
                
            </v-card>
        </v-slide-group-item>
    </v-slide-group>
    <!-- <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div v-for="image in images" :key="image">
            <img class="h-auto max-w-full rounded-lg" :src="image" :alt="title">
        </div>
    </div> -->
</template>