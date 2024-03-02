import { defineStore } from "pinia";

export const useSnackbarStore = defineStore('snackbar', {
    state: () => ({
        config: {
            show: false,
            message: '',
            color: 'success',
            timeout: 6000
        }
    }),
    getters: {

    },
    actions: {
        showSnackbarSuccess(message) {
            this.config.message = message;
            this.config.color = 'success';
            this.config.show = true;
        },
        showSnackbarError(message) {
            this.config.message = message;
            this.config.color = 'error';
            this.config.show = true;
        },
    }
})