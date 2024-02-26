import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        movies: [],
        movie: {},
        isLoading: false,
        queryMovies: ''
    }),
    getters: {
        totalMovies() {
            return this.movies.length
        }
    },
    actions: {
        async fetchMovies() {
            if (!this.movies.length) {
                this.isLoading = true
                const result = await fetch('http://localhost:8000/movies')
                const repsonse = await result.json()   
                this.movies = repsonse
                this.isLoading = false
            }
        },
        async searchMovies() {
            this.isLoading = true
            const result = await fetch(`http://localhost:8000/movies?q=${this.queryMovies}`)
            const repsonse = await result.json()
            this.movies = repsonse
            this.isLoading = false
        },
        async findMovies(id) {
            this.isLoading = true
            const result = await fetch(`http://localhost:8000/movies/${parseInt(id)}`)
            if (result.status === 404) {
                this.router.push({name: 'NotFound'})
            }
            const response  = await result.json()
            this.movie = response
            this.isLoading = false
        }
    },
})