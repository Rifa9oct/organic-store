import { deleteCart } from "@/actions";
import { RxCrossCircled } from "react-icons/rx";
import Swal from "sweetalert2";

const DeleteCart = ({productId}) => {
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
                    const res = await deleteCart(productId);
                    if (res.status === 200) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your cart has been deleted.",
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
        <>
            <button
                onClick={handleDelete}
                className='mr-5'>< RxCrossCircled className='text-2xl text-gray-400' />
            </button>
        </>
    );
};

export default DeleteCart;