<script setup>
const props = defineProps({
    images: Array,
    selectImage: Function
})
const setSelectedImage = (i) => {
    props.selectImage(i)
}
</script>

<template>
    <v-slide-group show-arrows>
        <v-slide-group-item v-for="(image, i) in images" :key="image">
            <v-card 
                height="100" 
                width="100"
                class="ma-4" 
                @click="setSelectedImage(i)">
                <v-img
                    :aspect-ratio="1"
                    :src="image"
                    cover
                ></v-img>
                
            </v-card>
        </v-slide-group-item>
    </v-slide-group>
</template>