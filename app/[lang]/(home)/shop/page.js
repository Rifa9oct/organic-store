import LeftSidebar from "@/components/shop/LeftSidebar";
import RightSidebar from "@/components/shop/RightSidebar";

const ShopPage = () => {
    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1220px] mx-auto flex flex-col-reverse lg:flex-row lg:gap-[60px] pb-10">
                <LeftSidebar />
                <RightSidebar />
            </div>
        </div>
    );
};

export default ShopPage;