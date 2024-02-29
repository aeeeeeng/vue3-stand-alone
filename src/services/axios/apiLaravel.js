import axios from "axios";
import router from "@/routes/index";

const apiLaravel = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout:360000
})

apiLaravel.interceptors.request.use(request => {
    return request
})

apiLaravel.interceptors.response.use(
    (response) => {
        return response.data
    },
    (error) => {
        if (error.status === 404) {
            router.push({name: 'NotFound'})
        }
        return error.response
    }
)

export default apiLaravel