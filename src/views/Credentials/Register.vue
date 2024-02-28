<script setup>
</script>

<template>
    <div class="d-flex align-center flex-column">
        <v-card class="mt-4" width="400">
            <v-card-title class="d-flex align-center flex-column">Register</v-card-title>
            <v-card-item>
                <form @submit.prevent="submit">
                    <v-text-field
                        label="Name"
                        placeholder="John Doe"
                        type="text"
                    ></v-text-field>
                    <v-text-field
                        label="E-mail"
                        placeholder="johndoe@gmail.com"
                        type="email"
                    ></v-text-field>
                    <v-text-field
                        label="Password"
                        type="password"
                    ></v-text-field>
                    <v-text-field
                        label="Password Confirmation"
                        type="password"
                    ></v-text-field>
                    <v-btn
                        block
                        size="large"
                        type="submit"
                        color="primary"
                        variant="elevated"
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
