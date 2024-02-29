import apiFakeJson from "@/services/axios/apiFakeJson";


export async function getAndSearchMovies(search) {
    return await apiFakeJson
        .get(`movies?${search}`)
}

export async function findMoviesByID(id) {
    return await apiFakeJson
        .get(`movies/${parseInt(id)}`)
}