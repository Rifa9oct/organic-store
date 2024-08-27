import Details from "@/components/details/Details";

export const metadata = {
    title: "Organic Store | Details",
    description: "Details page description",
};

const DetailsPage = () => {
    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto">
                <Details />
            </div>
        </div>
    );
};

export default DetailsPage;