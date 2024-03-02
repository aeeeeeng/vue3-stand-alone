<script setup>
import { useUsersStore } from '@/stores/users';
import { reactive, onMounted } from 'vue';


const usersStore = useUsersStore()

const user = reactive({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
})

onMounted(() => {
    usersStore.validations = {}
})

const register = async () => {
    await usersStore.register(user)
}

</script>

<template>
    <div class="d-flex align-center flex-column">
        <v-card class="mt-4" width="400">
            <v-card-title class="d-flex align-center flex-column">Register</v-card-title>
            <v-card-item>
                <form @submit.prevent="submit">
                    <v-text-field
                        v-model="user.name"
                        :error-messages="usersStore.validations.name && usersStore.validations.name[0]"
                        label="Name"
                        placeholder="John Doe"
                        type="text"
                    ></v-text-field>
                    <v-text-field
                        v-model="user.email"
                        :error-messages="usersStore.validations.email && usersStore.validations.email[0]"
                        label="E-mail"
                        placeholder="johndoe@gmail.com"
                        type="email"
                    ></v-text-field>
                    <v-text-field
                        v-model="user.password"
                        :error-messages="usersStore.validations.password && usersStore.validations.password[0]"
                        label="Password"
                        type="password"
                    ></v-text-field>
                    <v-text-field
                        v-model="user.password_confirmation"
                        :error-messages="usersStore.validations.password_confirmation && usersStore.validations.password_confirmation[0]"
                        label="Password Confirmation"
                        type="password"
                    ></v-text-field>
                    <v-btn
                        block
                        size="large"
                        type="submit"
                        color="primary"
                        variant="elevated"
                        @click="register"
                    >
                        Sign Up
                    </v-btn>
                    <RouterLink
                        :to="{name: 'Login'}"
                        class="d-block mt-4 text-right text-decoration-none text-primary"
                    >Already account, login</RouterLink>
                </form>
            </v-card-item>
        </v-card>
    </div>
</template>
