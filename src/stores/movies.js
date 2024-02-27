import { defineStore } from "pinia";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        movies: [],
        movie: {},
        filter: {},
        isLoading: false,
        queryMovies: '',
        selectedImage: 0
    }),
    getters: {
        totalMovies() {
            return this.movies.length
        },
        allImagesMovie() {
            if (this.movie.images) {
                this.movie.images.unshift(
                    this.movie.poster
                )
                return this.movie.images
            }
            return []
        },
        mainImage() {
            return this.allImagesMovie[this.selectedImage]
        },
        stringFilter() {
            return `[${Object.entries(this.filter).map(([key, value]) => `${key}: ${value}`).join(', ')}]`;
        }
    },
    actions: {
        async fetchMovies() {
            this.isLoading = true
            const params = {}
            if (this.filter.genre_like) {
                params.genre_like = this.filter.genre_like
            }
            const paramsString = new URLSearchParams(params).toString();
            const result = await fetch(`http://localhost:8000/movies?${paramsString}`)
            if (result.status === 404) {
                this.router.push({name: 'NotFound'})
            }
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