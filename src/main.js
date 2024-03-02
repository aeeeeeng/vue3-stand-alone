import './style.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from "pinia";
// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import router from './routes'
import App from './App.vue'
import LoadingComponent from "./components/LoadingComponent.vue";
import SnackbarComponent from "@/components/SnackbarComponent.vue";

const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})

const vuetify = createVuetify({
    theme: {
        defaultTheme: 'dark',
        //
    },
    components,
    directives,
})

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.component('LoadingComponent', LoadingComponent)
app.component('SnackbarComponent', SnackbarComponent)
app.mount('#app')
