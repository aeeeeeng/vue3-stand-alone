import { createRouter, createWebHistory } from 'vue-router'
import routes from './routeList'
import { useUsersStore } from "@/stores/users";
import { useUtilsStore } from "@/stores/utils";

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    const utilsStore = useUtilsStore()
    utilsStore.isLoadingPage = true
    if (to.meta.requireAuth) {
        const usersStore = useUsersStore()
        await usersStore.getMe()
        if (!usersStore.token) {
            return {
                name: 'Login',
                query: { redirect: to.fullPath },
            }
        }
    }
    if (to.meta.isAuthPage) {
        const usersStore = useUsersStore()
        await usersStore.getMe()
        if (usersStore.token) {
            return from
        }
    }
});

router.afterEach(() => {
    const utilsStore = useUtilsStore()
    setTimeout(() => {
        utilsStore.isLoadingPage = false
    }, 500);
})

export default router