import CheckoutForm from "@/components/checkout/CheckoutForm";
import { auth } from "@/auth";
import { getCartByUserId } from "@/queries/product-queries";

export const metadata = {
    title: "Organic Store | Checkout",
    description: "Checkout page description",
};

const page = async () => {
    const session = await auth();
    const user = session?.user;
    const carts = await getCartByUserId(user?.userId);

    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto pt-[50px] pb-20">
                <h1 className="text-[30px] font-bold border-b-[3px] pb-2 mb-10 border-b-lime-500 mx-6 lg:mx-0">Checkout</h1>
                <CheckoutForm user={user}  carts={carts}/>
            </div>
        </div>
    );
};

export default page;