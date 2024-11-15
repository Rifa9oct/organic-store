import Details from "@/components/details/Details";
import { getProductById } from "@/queries/product-queries";

export async function generateMetadata({ params: { id } }) {
    const product = await getProductById(id);

    return {
        title: product.title,
        description: product.description.slice(0, 100),
        openGraph: {
            images: [
                {
                    url: "https://i.ibb.co.com/9bZRZK1/Untitled-1.png",
                    width: 1200,
                    height: 600,
                },
            ],
        },
    };
}

const DetailsPage = async ({ params: { id } }) => {

    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto">
                <Details id={id} />
            </div>
        </div>
    );
};

export default DetailsPage;