<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useUsersStore } from "@/stores/users";
import { onMounted } from "vue";

const usersStore = useUsersStore()
const drawer = ref(false);

const logout = async () => {
    await usersStore.logout()
}
</script>
<template>
    <v-app-bar>
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        </template>

        <v-app-bar-title>Movie Galery</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" temporary>
        <v-list-item v-if="usersStore.token"
            prepend-avatar="https://pbs.twimg.com/profile_images/560315414744285184/FbqH0kcd_400x400.jpeg"
            :title="usersStore.user.name"
            class="pt-4 pb-4">
            <template v-slot:append>
                <v-menu>
                    <template v-slot:activator="{ props }">
                        <v-btn :loading="usersStore.isLoading" icon="mdi-menu-down" v-bind="props" size="small" variant="text"></v-btn>
                    </template>
                    <v-list>
                        <v-list-item @click="logout">
                            <v-list-item-title>Sign Out</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
        </v-list-item>
        <RouterLink v-else :to="{ name: 'Login' }">
            <v-list-item
                prepend-avatar="https://img.wattpad.com/8f19b412f2223afe4288ed0904120a48b7a38ce1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5650722d38464e2d744a515349673d3d2d3234323931353831302e313434336539633161633764383437652e6a7067?s=fit&w=720&h=720"
                class="mt-3 mb-3" title="Guest User">
            </v-list-item>
        </RouterLink>
        <v-divider></v-divider>
        <v-list density="compact" nav>
            <RouterLink :to="{ name: 'Home' }" active-class="text-white bg-blue-700">
                <v-list-item prepend-icon="mdi-home-circle-outline" title="Home" value="home"></v-list-item>
            </RouterLink>
            <RouterLink v-if="usersStore.token" :to="{ name: 'Movies' }">
                <v-list-item prepend-icon="mdi-filmstrip-box-multiple" title="Movie" value="movie"></v-list-item>
            </RouterLink>
            <RouterLink :to="{ name: 'About' }">
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