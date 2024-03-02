<script setup>
import { useUsersStore } from "@/stores/users";

const usersStore = useUsersStore()
</script>

<template>
    <h1>Home</h1>
    <p v-if="usersStore.token">
        {{ `Wellcome back, ${usersStore.user.name}` }}
    </p>
</template>