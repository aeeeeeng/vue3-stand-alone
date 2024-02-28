const routes = [
    { 
        path: '/', 
        name: 'Home',
        title: 'Home',
        component: () => import('../views/Home.vue')
    },
    { 
        path: '/login', 
        name: 'Login',
        title: 'Login',
        component: () => import('../views/Credentials/Login.vue')
    },
    { 
        path: '/register', 
        name: 'Register',
        title: 'Register',
        component: () => import('../views/Credentials/Register.vue')
    },
    { 
        path: '/about', 
        name: 'About',
        title: 'About',
        component: () => import('../views/About.vue')
    },
    { 
        path: '/movies', 
        name: 'Movies',
        title: 'Movies',
        component: () => import('../views/Movies.vue')
    },
    { 
        path: '/movies/:id', 
        name: 'MovieDetails',
        title: null,
        component: () => import('../views/MovieDetails.vue'),
        props: true
    },
    { 
        path: '/movies-search-result', 
        name: 'MovieSearchResult',
        title: null,
        component: () => import('../views/MovieSearchResult.vue'),
        props: true
    },
    {
        path: '/:pathMatch(.*)*',
        name: "NotFound",
        component: () => import('../views/NotFound.vue'),
        title: null
    }
]

export default routes;