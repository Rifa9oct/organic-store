"use client"

import { deleteReview } from "@/actions";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";

const DeleteReview = ({review}) => {

    const handleDelete = () => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    const res = await deleteReview(review?.id);
                    if (res.status === 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your review has been deleted.",
                            showConfirmButton: false,
                            icon: "success",
                            timer: 1500
                        });
                    }
                }
            });

        } catch (err) {
            console.log(err);
        }
    }

    return (
        <button onClick={handleDelete} className="absolute text-2xl top-5 right-5 text-lime-500">
            <RxCrossCircled />
        </button>
    );
};

export default DeleteReview;