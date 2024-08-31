"use client"

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdError } from "react-icons/md";

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} method="post" autoComplete="off">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Email address</label>
                        <input type="email"
                            {...register("email", { required: true })}
                            name="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:outline-none focus:border-lime-500 placeholder-gray-400"
                            placeholder="youremail.@domain.com" />
                        {errors.email && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Email field is required.</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">Password</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"}
                                {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                                name="password"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring- focus:outline-none focus:border-lime-500 placeholder-gray-400"
                                placeholder="*******" />
                            {errors.password?.type === "required" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Password is required.</p>}
                            {errors.password?.type === "minLength" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Password must be 6 characters.</p>}
                            {errors.password?.type === "maxLength" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Password must be less than 15 characters.</p>}
                            <span className="absolute top-4 right-4 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="remember" id="remember"
                            className="text-lime-500 focus:ring-0 rounded-sm cursor-pointer" />
                        <label htmlFor="remember" className="text-gray-600 ml-3 cursor-pointer">Remember me</label>
                    </div>
                    <Link href="#" className="text-lime-500">Forgot password</Link>
                </div>
                <div className="mt-4">
                    <button type="submit"
                        className="block w-full py-2 text-center text-white bg-lime-600 border border-lime-500 rounded hover:bg-transparent hover:text-lime-500 transition uppercase font-roboto font-medium">Login</button>
                </div>
            </form>
        </>
    );
};

export default LoginForm;
