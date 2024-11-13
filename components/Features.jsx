import { MdLocalShipping } from "react-icons/md";
import { BiSolidUserRectangle } from "react-icons/bi";
import { FaMoneyBillAlt } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Features = ({ dict }) => {
    return (
        <div className="bg-black py-[35px] mb-[140px]">
            <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="flex justify-center items-center gap-4 w-[285px] h-[122px] mx-auto bg-[#333333] rounded-md">
                    <MdLocalShipping className="text-4xl text-lime-600" />
                    <div className="text-white">
                        <h1 className="text-xl font-bold">{dict.Shipping}</h1>
                        <h2>{dict.ShippingTitle}</h2>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 mx-auto w-[285px] h-[122px] bg-[#333333] rounded-md" >
                    <BiSolidUserRectangle className="text-4xl text-lime-600" />
                    <div className="text-white">
                        <h1 className="text-xl font-bold">{dict.Certified}</h1>
                        <h2>{dict.CertifiedTitle}</h2>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 mx-auto w-[285px] h-[122px] bg-[#333333] rounded-md" >
                    <FaMoneyBillAlt className="text-4xl text-lime-600" />
                    <div className="text-white">
                        <h1 className="text-xl font-bold">{dict.Savings}</h1>
                        <h2>{dict.SavingsTitle}</h2>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4 mx-auto w-[285px] h-[122px] bg-[#333333] rounded-md" >
                    <GiReceiveMoney className="text-4xl text-lime-600" />
                    <div className="text-white">
                        <h1 className="text-xl font-bold">{dict.Returns}</h1>
                        <h2>{dict.ReturnsTitle}</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;