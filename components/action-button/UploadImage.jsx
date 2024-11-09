"use client"

import { customRevalidatePath } from "@/actions";
import useAxios from "@/hooks/useAxios";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRef } from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import Swal from "sweetalert2";

const UploadImage = ({ user, imageApiKey }) => {
    const fileUploadRef = useRef();
    const { axiosAuth } = useAxios();
    const { status, update } = useSession();

    if (status === "unauthenticated") {
        update();
    }

    const handleImageUpload = (e) => {
        e.preventDefault();

        fileUploadRef.current.addEventListener("change", uploadImage);
        fileUploadRef.current.click();

    }

    const uploadImage = async () => {
        try {
            const formData = new FormData();

            for (const file of fileUploadRef.current.files) {
                formData.append("image", file);
            }

            formData.append("email", user?.email);

            //image upload to imagebb and then get an URL
            const res = await axios.post(`https://api.imgbb.com/1/upload?key=${imageApiKey}`, formData);
            const imageURL = res?.data?.data?.display_url;

            if (res.status === 200) {
                const payload = {
                    image: imageURL,
                    email: user?.email
                }

                const res = await axiosAuth.post("/api/auth/updateimage", payload);

                if (res.status === 200) {
                    await customRevalidatePath();

                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: "Image uploaded successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <button
                onClick={handleImageUpload}
                type="submit"
                className="absolute text-white rounded-full p-1 bg-black bg-opacity-60 text-2xl bottom-[5px] right-[30px] ">
                <MdOutlineModeEditOutline />
            </button>
            <input ref={fileUploadRef} type="file" hidden />
        </>
    );
};

export default UploadImage;