<script setup>
</script>

<template>
    <div class="d-flex align-center flex-column">
        <v-card class="mt-4" width="400">
            <v-card-title class="d-flex align-center flex-column">Login</v-card-title>
            <v-card-item>
                <form @submit.prevent="submit">
                    <v-text-field
                        label="E-mail"
                        placeholder="johndoe@gmail.com"
                        type="email"
                    ></v-text-field>
                    <v-text-field
                        label="Password"
                        type="password"
                    ></v-text-field>
                    <v-btn
                        block
                        size="large"
                        type="submit"
                        color="primary"
                        variant="elevated"
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
