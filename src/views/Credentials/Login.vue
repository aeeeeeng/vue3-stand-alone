<script setup>
import { reactive } from "vue";
import { useUsersStore } from "@/stores/users";
import { onMounted } from "vue";

const usersStore = useUsersStore()

const user = reactive({
    email: '',
    password: '',
})

onMounted(() => {
    usersStore.validations = {}
})

const login = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectParam = urlParams.get('redirect');
    await usersStore.login(user, redirectParam)
}
</script>

<template>
    <div class="d-flex align-center flex-column">
        <v-card class="mt-4" width="400">
            <v-card-title class="d-flex align-center flex-column">Login</v-card-title>
            <v-card-item>
                <form @submit.prevent="submit">
                    <v-text-field
                        :error-messages="usersStore.validations.email && usersStore.validations.email[0]"
                        label="E-mail"
                        placeholder="johndoe@gmail.com"
                        type="email"
                        v-model="user.email"
                    ></v-text-field>
                    <v-text-field
                        :error-messages="usersStore.validations.password && usersStore.validations.password[0]"
                        label="Password"
                        type="password"
                        v-model="user.password"
                    ></v-text-field>
                    <v-btn
                        :disabled="usersStore.isLoading"
                        :loading="usersStore.isLoading"
                        block
                        size="large"
                        type="submit"
                        color="primary"
                        variant="elevated"
                        @click="login"
                    >
                        Sign In
                    </v-btn>
                    <RouterLink
                        :to="{name: 'Register'}"
                        class="d-block mt-4 text-right text-decoration-none text-primary"
                    >Create Account</RouterLink>
                </form>
            </v-card-item>
        </v-card>
    </div>
</template>
