import apiFakeJson from "@/services/axios/apiFakeJson";


export const getAndSearchMovies = async (search) => await apiFakeJson
    .get(`movies?${search}`)

export const findMoviesByID = async (id) => await apiFakeJson
    .get(`movies/${parseInt(id)}`)