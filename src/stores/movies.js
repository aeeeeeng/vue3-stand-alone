import { defineStore } from "pinia";
import { findMoviesByID, getAndSearchMovies } from "@/services/connections/movies/index";

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

            this.isLoading = true
            await getAndSearchMovies(paramsString)
                .then(response => {
                    this.movies = response
                }).finally(() => {
                    this.isLoading = false
                })
        },
        async findMovies(id) {
            this.isLoading = true
            await findMoviesByID(id)
                .then(response => {
                    this.movie = response
                })
                .finally(() => {
                    this.isLoading = false
                })
        }
    },
})