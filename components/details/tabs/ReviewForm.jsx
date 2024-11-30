"use client"

import { customRevalidatePath } from "@/actions";
import useAxios from "@/hooks/useAxios";
import { useForm } from "react-hook-form";
import { MdError } from "react-icons/md";
import Swal from "sweetalert2";

const ReviewForm = ({ user, product, isAddReview }) => {
    const { axiosAuth } = useAxios();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const userName = user?.name || "";
    const userEmail = user?.email || "";
    const image = user?.image || "";

    const onSubmit = async (data) => {
        if (!user) {
            router.push("/login");
        } else {
            try {
                const payload = { productId: product?.id, userId:user?.userId, name: data.name, email: data.email, title: product?.title , message: data.message, image};

                const res = await axiosAuth.post("/api/auth/review", payload);

                if (res.status === 201) {
                    const res = await customRevalidatePath();

                    if (res.status === 200) {
                        Swal.fire({
                            title: "Thank you!!",
                            position: "top-center",
                            icon: "success",
                            text: "Your review has been successfully added.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                }
            } catch (error) {
                console.log(error)
            }
        }
        reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} method="post" autoComplete="off">
            <textarea name="message" {...register("message", { required: true, maxLength: 150 })}
                id="message" placeholder="write here..." cols="45" rows="3" className="outline-lime-500 w-full text-gray-500 p-5 shadow"></textarea>
            {errors.message?.type === "required" && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> This field is required.</span>}
            {errors.message?.type === "maxLength" && <p className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" />Review message must be less than 150 characters.</p>}

            <div className="flex gap-10" >
                <div className="w-[550px]">
                    <label htmlFor="name" className="text-lg my-2 text-gray-700 block">Name *</label>
                    <input type="text" name="name" defaultValue={`${isAddReview? "":userName}`}
                        {...register("name", { required: true })}
                        placeholder="youre name" className="w-full shadow p-3 mb-2 outline-lime-500" />
                    {errors.name && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Name field is required.</span>}
                </div>

                <div className="w-[550px]">
                    <label htmlFor="email" className="text-lg my-2 text-gray-700 block">Email *</label>
                    <input type="text" name="email" defaultValue={`${isAddReview? "":userEmail}`}
                        {...register("email", { required: true })}
                        placeholder="youremail@domain.com" className="w-full shadow p-3 mb-2 outline-lime-500" />
                    {errors.email && <span className="text-sm mt-1 text-red-500"><MdError className="text-lg inline" /> Email field is required.</span>}
                </div>
            </div>

            <div className="flex gap-2 mt-3 text-gray-500">
                <input type="checkbox" name="" id="" />
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>

            <button type="submit" disabled={isAddReview} className={`${isAddReview? "bg-gray-300 text-gray-400  font-bold":"bg-lime-600 hover:bg-lime-500 text-white"} mt-4 px-8 py-3 rounded-md`}>Submit</button>
        </form>
    );
};

export default ReviewForm;