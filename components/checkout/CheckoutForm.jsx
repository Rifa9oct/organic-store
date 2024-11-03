"use client"

import { MdError } from "react-icons/md";
import RightSidebar from "./RightSidebar";
import { useForm } from "react-hook-form";
import useAxios from "@/hooks/useAxios";
import Swal from "sweetalert2";
import { customRevalidatePath } from "@/actions";
import { useState } from "react";

const CheckoutForm = ({ user, carts }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { axiosAuth } = useAxios();
    const totalPrice = carts?.reduce((total, cart) => total + cart.totalPrice, 0).toFixed(2);
    const [completeCheckout, setCompleteCheckout] = useState(false)

    const onSubmit = async (data) => {
        try {
            const payload = {
                userId: user?.userId,
                firstName: data.firstName,
                lastName: data.lastName,
                company: data.company,
                region: data.region,
                address: data.address,
                district: data.district,
                phoneNo: data.phoneNo,
                email: data.email,
                note: data.note,
                buyProducts: carts.map(product => (
                    {
                        productId: product.productId,
                        title: product.title,
                        quantityToBuy: product.quantityToBuy
                    }
                )),
                totalPrice: totalPrice,
                date: Date.now(),
                paymentMethod: "Check payments"
            };
            const res = await axiosAuth.post("/api/auth/checkout", payload);

            if (res.status === 201) {
                const res = await customRevalidatePath();

                if (res.status === 200) {
                    setDisabled(true)
                    Swal.fire({
                        title: "Thank you!!",
                        position: "top-center",
                        icon: "success",
                        text: "You has been successfully checkout your products.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }
        } catch (error) {
            console.log(error)
        }
        reset();
    }
    const [firstName, lastName] = user?.name.split(" ");

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-12 items-start lg:gap-10">
                <div className="col-span-full lg:col-span-8 m-6 lg:m-0 border-2 border-gray-200 p-[28px] rounded">
                    <h3 className="text-[20px] font-semibold capitalize mb-5 border-b border-gray-300 pb-[14px]">Billing details</h3>
                    <div className="space-y-4">
                        <div className="grid md:grid-cols-2 grid-cols-1  gap-4 font-poppins">
                            <div className="font-poppins">
                                <label htmlFor="firstName" className="block font-bold mb-1 text-sm">First Name <span
                                    className="text-primary text-lg">*</span></label>
                                <input type="text"
                                    {...register("firstName", { required: true })}
                                    name="firstName"
                                    defaultValue={firstName}
                                    className="p-3 mb-1 border focus:outline-dotted w-full" />
                                {errors.firstName && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> First Name field is required.</span>}
                            </div>
                            <div className="font-poppins">
                                <label htmlFor="lastName" className="block font-bold mb-1 text-sm">Last Name <span
                                    className="text-primary text-lg">*</span></label>
                                <input type="text"
                                    {...register("lastName", { required: true })}
                                    name="lastName"
                                    defaultValue={lastName}
                                    className="p-3 mb-1 border focus:outline-dotted w-full" />
                                {errors.lastName && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Last Name field is required.</span>}
                            </div>
                        </div>
                        <div className="font-poppins">
                            <label htmlFor="company" className="block font-bold mb-1 text-sm">Company name (optional)</label>
                            <input type="text"
                                {...register("company", { required: false })}
                                name="company" className="p-3 mb-1 border focus:outline-dotted w-full" />
                        </div>
                        <div className="font-poppins">
                            <label htmlFor="region" className="block font-bold mb-1 text-sm">Country / Region <span
                                className="text-primary text-lg">*</span></label>
                            <input type="text"
                                {...register("region", { required: true })}
                                name="region" className="p-3 mb-1 border focus:outline-dotted w-full" />
                            {errors.region && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Region field is required.</span>}
                        </div>
                        <div className="font-poppins">
                            <label htmlFor="address" className="block font-bold mb-1 text-sm">Street address <span
                                className="text-primary text-lg">*</span></label>
                            <input type="text"
                                {...register("address", { required: true })}
                                name="address" className="p-3 mb-1 border focus:outline-dotted w-full" />
                            {errors.address && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Address field is required.</span>}
                        </div>
                        <div className="font-poppins">
                            <label htmlFor="district" className="block font-bold mb-1 text-sm">District <span
                                className="text-primary text-lg">*</span></label>
                            <input type="text"
                                {...register("district", { required: true })}
                                name="district" className="p-3 mb-1 border focus:outline-dotted w-full" />
                            {errors.district && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> District field is required.</span>}
                        </div>
                        <div className="font-poppins">
                            <label htmlFor="phoneNo" className="block font-bold mb-1 text-sm">Phone number <span
                                className="text-primary text-lg">*</span></label>
                            <input type="text"
                                {...register("phoneNo", { required: true })}
                                name="phoneNo" className="p-3 mb-1 border focus:outline-dotted w-full" />
                            {errors.phone && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Phone field is required.</span>}
                        </div>
                        <div className="font-poppins">
                            <label htmlFor="email" className="block font-bold mb-1 text-sm">Email address <span
                                className="text-primary text-lg">*</span></label>
                            <input type="email"
                                {...register("email", { required: true })}
                                name="email"
                                defaultValue={user?.email}
                                className="p-3 mb-1 border focus:outline-dotted w-full" />
                            {errors.email && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Email field is required.</span>}
                        </div>

                        <h2 className="text-[20px]  font-semibold capitalize mb-5 border-b border-gray-300 pb-[14px]">Additional information</h2>
                        <div className="font-poppins">
                            <label htmlFor="email" className="block font-bold mb-1 text-sm">Order notes (optional)</label>
                            <textarea type="text"
                                {...register("note", { required: false })}
                                name="note" placeholder="Notes about your order, e.g.special notes for delivery... " id="email" className="p-3 mb-1 border focus:outline-dotted w-full" />
                        </div>
                    </div>
                </div>

                <RightSidebar completeCheckout={completeCheckout} carts={carts} />
            </form>
        </>
    );
};

export default CheckoutForm;