<script setup>
import { useSnackbarStore } from "@/stores/snackbar";
const snackbarStore = useSnackbarStore()
</script>

<template>
<v-snackbar 
    v-model="snackbarStore.config.show" 
    :color="snackbarStore.config.color" 
    :timeout="snackbarStore.config.timeout"
>
    {{ snackbarStore.config.message }}
    <template v-slot:action="{ attrs }">
        <v-btn text color="white" v-bind="attrs" @click="snackbarStore.config.show = false">Close</v-btn>
    </template>
</v-snackbar>
</template>