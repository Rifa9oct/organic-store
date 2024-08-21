import { FaAngleRight } from "react-icons/fa6";
import Category from "./filter/Category";
import Price from "./filter/Price";
import ShpoCard from "./ShpoCard";

const LeftSidebar = () => {
    return (
        <div className="lg:pt-[64px] p-5">
            <div className="flex gap-2 items-center">
                <input className="border w-full p-3 rounded-md focus:border-lime-500 outline-none"
                 type="text" placeholder="search products..." />

                 <div className="bg-lime-600 text-lg rounded-md text-center text-white w-[35px] h-[47px] pl-2 pt-4"><FaAngleRight/></div>
            </div>

            <Category/>
            <Price/>

           <div className="hidden lg:block"> <ShpoCard/></div>
        </div>
    );
};

export default LeftSidebar;