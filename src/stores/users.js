import { defineStore } from "pinia";
import { login, register, logout, getMe } from "@/services/connections/auth/index";
import { useSnackbarStore } from "@/stores/snackbar";

export const useUsersStore = defineStore('users', {
    state: () => ({
        user: {},
        token: null,
        isLoading: false,
        validations: {}
    }),
    getters: {

    },
    actions: {
        async login(payloads, redirect) {
            const snackbarStore = useSnackbarStore()
            this.isLoading = true
            await login(payloads)
                .then(response => {
                    this.user = response.data
                    this.token = response.token
                    this.validations = {}
                    localStorage.setItem('userData', JSON.stringify(response.data));
                    localStorage.setItem('token', response.token);
                    this.getMe()
                    snackbarStore.showSnackbarSuccess(response.message)
                    if (redirect) {
                        this.router.push({
                            path: redirect
                        })
                    } else {
                        this.router.push({
                            name: 'Home'
                        })
                    }
                })
                .catch(error => {
                    this.validations = error.status === 422
                        ? error.data.data
                        : {}
                    snackbarStore.showSnackbarError(error.data.message)
                })
                .finally(() => {
                    this.isLoading = false
                })
        },
        async getMe() {
            const snackbarStore = useSnackbarStore()
            await getMe()
                .then(response => {
                    this.user = response
                    this.token = localStorage.getItem('token')
                }).catch(error => {
                    this.user = {}
                    this.token = null
                })
        },
        async register(payloads) {
            const snackbarStore = useSnackbarStore()
            this.isLoading = true
            await register(payloads)
                .then(response => {
                    this.router.push({
                        name: 'Login'
                    })
                    snackbarStore.showSnackbarSuccess(response.message)
                })
                .catch(error => {
                    this.validations = error.status === 422
                        ? error.data.data
                        : {}
                    snackbarStore.showSnackbarError(error.data.message)
                })
                .finally(() => {
                    this.isLoading = false
                })
        },
        async logout() {
            const snackbarStore = useSnackbarStore()
            this.isLoading = true
            await logout()
                .then(response => {
                    this.user = {}
                    this.token = null
                    this.validations = {}
                    localStorage.removeItem('userData');
                    localStorage.removeItem('token');
                    snackbarStore.showSnackbarSuccess(response.message)
                    this.router.push({
                        name: 'Login'
                    })
                })
                .catch(error => {
                    snackbarStore.showSnackbarError(error.data.message)
                })
                .finally(() => {
                    this.isLoading = false
                })
        }
    }
})