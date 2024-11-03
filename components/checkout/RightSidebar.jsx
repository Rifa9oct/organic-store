
import Link from "next/link";

const RightSidebar =  ({completeCheckout,carts}) => {
   
    return (
        <div className="col-span-full lg:col-span-4 m-6 lg:m-0 border-2 p-[28px] rounded">
            <h3 className="text-[20px] font-semibold pb-[14px]">Your Order</h3>

            <div className="flex justify-between font-poppins font-bold pb-[14px] border-gray-300 border-b">
                <h5>Product</h5>
                <p>Subtotal</p>
            </div>

            {
                carts?.map(item => (
                    <div key={item.id} className="flex justify-between text-gray-600 font-poppins pt-[14px] pb-[14px] border-gray-300 border-b">
                        <h5>{item.title} × {item.quantityToBuy}</h5>
                        <p>£{item.totalPrice}</p>
                    </div>
                ))
            }

            <div className="font-bold flex justify-between font-poppins pt-[14px] pb-[14px] border-gray-300 border-b">
                <h5 className="text-lime-500">Subtotal</h5>
                <p>£35.00</p>
            </div>

            <div className="font-bold flex justify-between font-poppins pt-[14px] pb-[14px] border-gray-300 border-b">
                <p className="text-lime-500">Total</p>
                <p>£35.00</p>
            </div>

            <div className="flex items-center mb-4 mt-6 font-poppins">
                <input type="checkbox" name="aggrement" id="aggrement"
                    className="text-lime-500 focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <Link href="#"
                    className="text-lime-500 font-semibold">terms & conditions</Link></label>
            </div>

            <button type="submit" disabled={completeCheckout}
                className={`${completeCheckout? "bg-gray-300 text-gray-400":"hover:bg-lime-500 bg-lime-600 text-white"} block font-poppins uppercase w-full py-3 px-4 text-center border rounded-md transition font-medium`}>Place order
            </button>
        </div>
    );
};

export default RightSidebar;