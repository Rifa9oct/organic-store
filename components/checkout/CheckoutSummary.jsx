import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { getCheckout } from "@/queries/product-queries";
import { auth } from "@/auth";

const CheckoutSummary = async () => {
    const session = await auth();
    const user = session?.user;
    const checkoutSummary = await getCheckout(user?.email);
    const buyProducts = checkoutSummary[0]?.buyProducts;

    return (
        <div className="m-6 lg:m-0">
            <h1 className="font-poppins text-xl text-gray-600 mb-5">Thank you, Your order has been received. Please check your email.</h1>

            <div className="font-poppins grid grid-cols-2 md:flex gap-3 md:gap-6">
                <div className="pr-6 md:border-r-2 border-dashed border-gray-400 ">
                    <p className="text-gray-500">Order number:</p>
                    <p className="font-bold">76895</p>
                </div>
                <div className="pr-6 md:border-r-2 border-dashed border-gray-400">
                    <p className="text-gray-500">Date:</p>
                    <p className="font-bold">{checkoutSummary[0]?.date}</p>
                </div>
                <div className="pr-6 md:border-r-2 border-dashed border-gray-400">
                    <p className="text-gray-500">Total:</p>
                    <p className="font-bold">£{checkoutSummary[0]?.totalPrice}</p>
                </div>
                <div>
                    <p className="text-gray-500">Payment method:</p>
                    <p className="font-bold">{checkoutSummary[0]?.paymentMethod}</p>
                </div>
            </div>

            <div className="my-10 border-2">
                <p className="bg-white font-bold text-2xl p-3">Order details</p>

                <div className="font-poppins md:text-lg flex text-gray-700">
                    <table className="table-auto border-collapse w-full border border-gray-300 text-left">
                        <thead>
                            <tr className="bg-gray-100 text-black font-bold">
                                <th className="border border-gray-300 lg:w-[50%] p-3">Product</th>
                                <th className="border border-gray-300 p-3">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {buyProducts?.map(product => (
                                <tr key={product._id.toString()} className="border-b">
                                    <td className="border border-gray-300 p-3">
                                        <span className="text-lime-500 font-normal">{product.title}</span> × {product.quantityToBuy}
                                    </td>
                                    <td className="border border-gray-300 p-3">
                                        £{(product.price * product.quantityToBuy).toFixed(2)}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td className="border border-gray-300 p-3">Subtotal:</td>
                                <td className="border border-gray-300 p-3">£{checkoutSummary[0]?.totalPrice}</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">Payment method:</td>
                                <td className="border border-gray-300 p-3">Check payments</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-3">Total:</td>
                                <td className="border border-gray-300 p-3">£{checkoutSummary[0]?.totalPrice}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="my-10 border-2 pb-5 md:text-lg text-gray-700">
                <p className="bg-white font-bold text-2xl p-3 text-black border-b-2">Billing address</p>
                <div className="font-poppins">
                    <p className="px-5 pt-5"><span className="font-bold">Name: </span>{checkoutSummary[0]?.firstName} {checkoutSummary[0]?.lastName}</p>
                    <p className="px-5 "><span className="font-bold">Region: </span>{checkoutSummary[0]?.region}</p>
                    <p className="px-5 "><span className="font-bold">Address: </span>{checkoutSummary[0]?.address}</p>
                    <p className="px-5 "><span className="font-bold">District: </span>{checkoutSummary[0]?.district}</p>
                    <p className="px-5 "><FaPhone className="inline-block" /> {checkoutSummary[0]?.phoneNo}</p>
                    <p className="px-5 "><IoMdMail className="inline-block" /> {checkoutSummary[0]?.email}</p>
                </div>
            </div>
        </div>
    );
};

export default CheckoutSummary;