"use client"

import { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { axiosAuth } from "@/axiosAuth";
import axios from "axios";
import { useRouter } from "next/navigation";

const useAxios = () => {
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        // Add a request interceptor
        const requestIntercept = axiosAuth.interceptors.request.use(
            (config) => {
                const authToken = session?.user?.accessToken;
                if (authToken) {
                    config.headers.Authorization = `Bearer ${authToken}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );

        // Add a response interceptor
        const responseIntercept = axiosAuth.interceptors.response.use(
            (response) => response,
            async (error) => {
                const originalRequest = error?.config;
                if (error.response.status === 403 && !originalRequest._retry) {
                    originalRequest._retry = true;
                    try {
                        const refreshToken = session?.user?.refreshToken;

                        const response = await axios.post(`/api/auth/refresh`, { refreshToken });
                        const newAccessToken = response.data.accessToken;

                        console.log(`New Token: ${newAccessToken}`);

                        session.user.accessToken = newAccessToken;

                        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                        return axiosAuth(originalRequest);
                    } catch (error) {
                        console.error("Failed to refresh token:", error);
                        signOut({ callbackUrl: "/login" });
                        router.push("/login");
                    }
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept);
            axiosAuth.interceptors.response.eject(responseIntercept);
        }
    }, [session?.user, router]);

    return { axiosAuth };
};

export default useAxios;