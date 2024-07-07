import { MdLocalShipping } from "react-icons/md";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Features = () => {
    return (
        <div className="bg-black grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8 justify-center py-[35px] mb-[140px] lg:px-[350px]">
            <div className="flex justify-center items-center gap-4 mx-auto lg:mx-0 w-[285px] h-[122px] bg-[#333333] rounded-md"  >
                <MdLocalShipping className="text-4xl text-lime-600" />
                <div className="text-white">
                    <h1 className="text-xl font-bold">Free Shipping</h1>
                    <h2>Above $5 Only</h2>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mx-auto lg:mx-0 w-[285px] h-[122px] bg-[#333333] rounded-md" >
                <BiSolidUserRectangle className="text-4xl text-lime-600" />
                <div className="text-white">
                    <h1 className="text-xl font-bold">Certified Organic</h1>
                    <h2>100% Guarantee</h2>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mx-auto lg:mx-0 w-[285px] h-[122px] bg-[#333333] rounded-md" >
                <FaMoneyBillAlt className="text-4xl text-lime-600" />
                <div className="text-white">
                    <h1 className="text-xl font-bold">Huge Savings</h1>
                    <h2>At Lowest Price</h2>
                </div>
            </div>
            <div className="flex justify-center items-center gap-4 mx-auto lg:mx-0 w-[285px] h-[122px] bg-[#333333] rounded-md" >
                <GiReceiveMoney className="text-4xl text-lime-600" />
                <div className="text-white">
                    <h1 className="text-xl font-bold">Easy Returns</h1>
                    <h2>No Questions Asked</h2>
                </div>
            </div>
        </div>
    );
};

export default Features;