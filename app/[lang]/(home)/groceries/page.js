import LeftSidebar from "@/components/shop/LeftSidebar";
import RightSidebar from "@/components/shop/RightSidebar";


export const metadata = {
    title: "Organic Store | Groceries",
    description: "Groceries page description",
};

const GroceriesPage = ({ searchParams: { query, page } }) => {
    const pageNo = page ? page : "1";

    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto flex flex-col-reverse lg:flex-row pb-10">
                <LeftSidebar />
                <RightSidebar
                    title="Groceries"
                    pageNo={pageNo}
                    query={query}
                />
            </div>
        </div>
    );
};

export default GroceriesPage;