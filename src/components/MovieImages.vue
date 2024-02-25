<script setup>
const props = defineProps({
    images: Array,
    title: String
})
</script>

<template>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div v-for="image in images" :key="image">
            <img class="h-auto max-w-full rounded-lg" :src="image" :alt="title">
        </div>
    </div>
</template>