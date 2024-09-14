import LeftSidebar from "@/components/shop/LeftSidebar";
import RightSidebar from "@/components/shop/RightSidebar";


export const metadata = {
    title: "Organic Store | Groceries",
    description: "Groceries page description",
};

const GroceriesPage = () => {
    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row pb-10">
                <LeftSidebar />
                <RightSidebar
                    title="Groceries"
                />
            </div>
        </div>
    );
};

export default GroceriesPage;