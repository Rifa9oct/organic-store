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
                    url: `${product.thumbnail}`,
                    width: 1200,
                    height: 600,
                },
            ],
        },
    };
}

const DetailsPage = async ({ params: { id, lang } }) => {
    const product = await getProductById(id);

    return (
        <div className="bg-[#F8F6F3]">
            <div className="max-w-[1320px] mx-auto">
                <Details lang={lang} product={product} />
            </div>
        </div>
    );
};

export default DetailsPage;