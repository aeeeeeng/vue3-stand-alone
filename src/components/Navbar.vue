<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

const drawer = ref(false);

</script>

<template>
    <v-app-bar>
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Movie Galery</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item prepend-avatar="https://pbs.twimg.com/profile_images/560315414744285184/FbqH0kcd_400x400.jpeg"
            class="mt-3 mb-3" title="Syahril Ardi">
        </v-list-item>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <RouterLink :to="{name: 'Home'}" active-class="text-white bg-blue-700">
                <v-list-item prepend-icon="mdi-home-circle-outline" title="Home" value="home"></v-list-item>
            </RouterLink>
            <RouterLink :to="{name: 'Movies'}">
                <v-list-item prepend-icon="mdi-filmstrip-box-multiple" title="Movie" value="movie"></v-list-item>
            </RouterLink>
            <RouterLink :to="{name: 'About'}">
                <v-list-item prepend-icon="mdi-information-outline" title="About" value="about"></v-list-item>
            </RouterLink>
        </v-list>
    </v-navigation-drawer>
        
</template>

<style scoped>
    a {
        text-decoration: none;
        color: unset;
    }
</style>