<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import MovieImages from "../components/MovieImages.vue";

const queryMovie = ref({})
const isLoading = ref(true)
const route = useRoute()
const router = useRouter();

onMounted(async() => {
    const result = await fetch(`http://localhost:8000/movies/${route.params.id}`)
    if (result.status === 404) {
        router.push({name: 'NotFound'})
    }
    const response  = await result.json()
    queryMovie.value = response
    isLoading.value = false
})

</script>

<template>
    <section class="bg-white dark:bg-gray-100 m-6 p-4">
        <div v-if="isLoading" class="container">Loading ...</div>
        <div v-else class="container" >
            <div class="flex flex-col items-center px-4 py-12 mx-auto xl:flex-row">
                <div class="flex justify-center xl:w-1/2">
                    <img 
                        class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-md"
                        :src="queryMovie.poster"
                        :alt="queryMovie.title"
                    />
                </div>
                <div class="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
                    <h2 class="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-black">
                        {{ queryMovie.title }}
                    </h2>
                    <p class="mb-2">{{ queryMovie.plot }}</p>
                    <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
                        {{ queryMovie.year }}
                    </span>
                    <span class="m-2 p-2 bg-slate-300 text-slate-800 rounded-md">
                        {{ queryMovie.runtime }}
                    </span>
                    <div class="mt-6 sm:mx-2">
                        <button @click="$router.back()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <span class="mx-2">Go Back</span>
                        </button>
                    </div>
                </div>
            </div>
            <MovieImages :images="queryMovie.images" :title="queryMovie.title" />
        </div>
    </section>
</template>