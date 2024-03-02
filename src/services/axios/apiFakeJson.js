import axios from "axios";
import router from "@/routes/index";

const apiFakeJson = axios.create({
    baseURL: 'http://localhost:8000',
    timeout:360000
})

apiFakeJson.interceptors.request.use(request => {
    return request
})

apiFakeJson.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        const {status} = error.response
        if (status === 404) {
            router.push({name: 'NotFound'})
        }
        throw error.response
    }
)

export default apiFakeJson