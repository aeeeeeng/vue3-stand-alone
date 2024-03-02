import { defineStore } from "pinia";

export const useUtilsStore = defineStore('utils', {
    state: () => ({
        isLoadingPage: false
    }),
})