"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { MdError } from "react-icons/md";
import Swal from "sweetalert2";

const RegisterForm = ({ dict }) => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const name = data.name;
            const email = data.email;
            const password = data.password;
            const user = { name, email, password };

            const res = await axios.post("/api/auth/register", user);

            if (res.status === 201) {
                router.push("/login");
            }

        } catch (error) {
            if (error.status === 409) {
                Swal.fire({
                    title: `${error.response.data}🙄`,
                    icon: "warning",
                });
            } else {
                console.log(error);
            }
        }
        reset();
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="post" autoComplete="off">
                <div className="space-y-2">
                    <div>
                        <label htmlFor="name" className="text-gray-600 mb-2 block">{dict.FullName}</label>
                        <input type="text"
                            {...register("name", { required: true })}
                            name="name"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm focus:outline-none rounded focus:ring-0 focus:border-lime-500 placeholder-gray-400"
                            placeholder={dict.NamePlaceholder} />
                        {errors.name && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> {dict.NameError}</span>}
                    </div>
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">{dict.Email}</label>
                        <input type="email"
                            {...register("email", { required: true })}
                            name="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:outline-none focus:border-lime-500 placeholder-gray-400"
                            placeholder={dict.EmailPlaceholder} />
                        {errors.email && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> {dict.EmailError}</span>}
                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block">{dict.Password}</label>
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"}
                                {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                                name="password"
                                className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring- focus:outline-none focus:border-lime-500 placeholder-gray-400"
                                placeholder="*******" />
                            {errors.password?.type === "required" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> {dict.PasswordError}.</p>}
                            {errors.password?.type === "minLength" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> {dict.PasswordError2}</p>}
                            {errors.password?.type === "maxLength" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> {dict.PasswordError3}</p>}
                            <span className="absolute top-4 right-4 text-gray-500" onClick={() => setShowPassword(!showPassword)}>
                                {
                                    showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>
                                }
                            </span>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex items-center">
                        <input type="checkbox" name="aggrement" id="aggrement"
                            className="text-lime-500 focus:ring-0 rounded-sm cursor-pointer" />
                        <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer">{dict.TermsOne} <a
                            href="#" className="text-lime-500">{dict.TermsTwo}</a></label>
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit"
                        className="block w-full py-2 text-center text-white bg-lime-600 border border-lime-500 rounded hover:bg-transparent hover:text-lime-500 transition uppercase font-roboto font-medium">{dict.CreateAccount}</button>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;