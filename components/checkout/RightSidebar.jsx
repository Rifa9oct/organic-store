import Link from "next/link";

const RightSidebar = () => {

    return (
        <div className="col-span-full lg:col-span-4 m-6 lg:m-0 border-2 p-[28px] rounded">
            <h3 className="text-[20px] font-semibold pb-[14px]">Your Order</h3>

            <div className="flex justify-between font-poppins font-bold pb-[14px] border-gray-300 border-b">
                <h5>Product</h5>
                <p>Subtotal</p>
            </div>

            <div className="flex justify-between text-gray-600 font-poppins pt-[14px] pb-[14px] border-gray-300 border-b">
                <h5>Assorted Coffee × 1</h5>
                <p>£35.00</p>
            </div>

            <div className="flex justify-between text-gray-600 font-poppins pt-[14px] pb-[14px] border-gray-300 border-b">
                <h5>Subtotal</h5>
                <p>£35.00</p>
            </div>

            <div className="flex justify-between text-gray-600 font-poppins pt-[14px] pb-[14px] border-gray-300 border-b">
                <p>Total</p>
                <p>£35.00</p>
            </div>

            <div className="flex items-center mb-4 mt-6 font-poppins">
                <input type="checkbox" name="aggrement" id="aggrement"
                    className="text-lime-500 focus:ring-0 rounded-sm cursor-pointer w-3 h-3" />
                <label htmlFor="aggrement" className="text-gray-600 ml-3 cursor-pointer text-sm">I agree to the <Link href="#"
                    className="text-lime-500 font-semibold">terms & conditions</Link></label>
            </div>

            <button type="submit"
                className="block font-poppins uppercase w-full py-3 px-4 text-center text-white bg-lime-600 border rounded-md hover:bg-lime-500 transition font-medium">Place order
            </button>
        </div>
    );
};

export default RightSidebar;