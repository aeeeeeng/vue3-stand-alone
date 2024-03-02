import axios from "axios";
import router from "@/routes/index";

const apiLaravel = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout:360000
})

apiLaravel.interceptors.request.use(request => {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

apiLaravel.interceptors.response.use(
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

export default apiLaravel