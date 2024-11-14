import axios from "axios";

export const axiosAuth = axios.create({
    baseURL: 'https://organic-store-red.vercel.app'
})