"use client"

import { MdError } from "react-icons/md";
import RightSidebar from "./RightSidebar";
import { useForm } from "react-hook-form";

const CheckoutForm = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

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
                                    name="firstName" className="p-3 mb-1 border focus:outline-dotted w-full" />
                                {errors.firstName && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> First Name field is required.</span>}
                            </div>
                            <div className="font-poppins">
                                <label htmlFor="lastName" className="block font-bold mb-1 text-sm">Last Name <span
                                    className="text-primary text-lg">*</span></label>
                                <input type="text"
                                    {...register("lastName", { required: true })}
                                    name="lastName" className="p-3 mb-1 border focus:outline-dotted w-full" />
                                {errors.lastName && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Last Name field is required.</span>}
                            </div>
                        </div>
                        <div className="font-poppins">
                            <label htmlFor="company" className="block font-bold mb-1 text-sm">Company name (optional)</label>
                            <input type="text"
                                {...register("company", { required: true })}
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
                            <label htmlFor="phone" className="block font-bold mb-1 text-sm">Phone number <span
                                className="text-primary text-lg">*</span></label>
                            <input type="text"
                                {...register("phone", { required: true })}
                                name="phone" className="p-3 mb-1 border focus:outline-dotted w-full" />
                            {errors.phone && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Phone field is required.</span>}
                        </div>
                        <div className="font-poppins">
                            <label htmlFor="email" className="block font-bold mb-1 text-sm">Email address <span
                                className="text-primary text-lg">*</span></label>
                            <input type="email"
                                {...register("email", { required: true })}
                                name="email" id="email" className="p-3 mb-1 border focus:outline-dotted w-full" />
                            {errors.email && <span className="text-sm text-red-500"><MdError className="text-lg inline" /> Email field is required.</span>}
                        </div>

                        <h2 className="text-[20px]  font-semibold capitalize mb-5 border-b border-gray-300 pb-[14px]">Additional information</h2>
                        <div className="font-poppins">
                            <label htmlFor="email" className="block font-bold mb-1 text-sm">Order notes (optional)</label>
                            <textarea type="text"
                                {...register("note", { required: true })}
                                name="note" placeholder="Notes about your order, e.g.special notes for delivery... " id="email" className="p-3 mb-1 border focus:outline-dotted w-full" />
                        </div>
                    </div>
                </div>

                <RightSidebar />
            </form>
        </>

    );
};

export default CheckoutForm;