import apiLaravel from "@/services/axios/apiLaravel";

export const login = async (payloads) => await apiLaravel
    .post('/auth/login', payloads)

export const getMe = async () => await apiLaravel.get('/user')

export const register = async (payloads) => await apiLaravel
    .post('/auth/register', payloads)

export const logout = async () => await apiLaravel
    .post('/auth/logout')