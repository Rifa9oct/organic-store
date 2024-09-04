import Details from "@/components/details/Details";
import { getProductById } from "@/queries/product-queries";

export const metadata = {
    title: "Organic Store | Details",
    description: "Details page description",
};

const DetailsPage = async ({params: {id}}) => {
    const product = await getProductById(id);
    
    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto">
                <Details product={product}/>
            </div>
        </div>
    );
};

export default DetailsPage;