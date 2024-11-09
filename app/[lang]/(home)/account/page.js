import { auth } from "@/auth";
import UploadImage from "@/components/action-button/UploadImage";
import { getCheckoutProducts } from "@/queries/product-queries";
import { getUserByEmail } from "@/queries/user-queries";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const AccountPage = async () => {
    const session = await auth();
    const getUser = await getUserByEmail(session?.user?.email);
    const user = getUser[0];

    const imageApiKey = process.env.IMAGE_HOSTING_KEY;

    const checkoutProducts = await getCheckoutProducts(user?.email);

    return (
        <div className="bg-[#F8F6F3] pb-[120px] pt-10">
            <div className="max-w-[1320px] mx-auto">
                <div className="flex flex-col justify-center items-center">
                    <div className="relative">
                        {
                            user?.image ? (
                                <div className="w-[200px] h-[200px] rounded-full border border-lime-500 overflow-hidden">
                                    <Image src={user?.image} width={200} height={200} alt="user-info" />
                                </div>
                            ) : (
                                <FaUserCircle className="text-[200px]" />
                            )
                        }

                        <UploadImage user={user} imageApiKey={imageApiKey} />
                    </div>

                    <h3 className="font-poppins text-3xl font-bold mt-3 mb-1">{user?.name}</h3>
                    <h3>{user?.email}</h3>
                </div>

                {/* order history  */}
                <div className="flex flex-col-reverse lg:flex-row gap-20 lg:gap-[150px] justify-center mt-[50px]">
                    <div className="mx-auto lg:mx-0 md:w-[500px] border p-5 shadow-lg">
                        <p className="text-2xl font-bold mb-5 text-center border-b-[3px] pb-2 border-lime-500">Order History</p>

                        <div className="font-poppins">
                            {
                                checkoutProducts?.slice(1).map(product => (
                                    <div key={product.id} className="mb-5" >
                                        <h1 className="font-bold">{product.date}</h1>
                                        {
                                            product?.buyProducts.map(item => (
                                                <h1 key={item.productId.toString()} className="font-bold"><span className="text-lime-500 font-normal">{item.title}</span> * {item.quantityToBuy}</h1>
                                            ))
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="mx-auto lg:mx-0 md:w-[500px] border p-5 shadow-lg">
                        <p className="text-2xl font-bold mb-5 text-center border-b-[3px] pb-2 border-lime-500">Recent Purchases</p>
                        <div className="font-poppins">
                            <div className="mb-5" >
                                <h1 className="font-bold">{checkoutProducts[0].date}</h1>
                                {
                                    checkoutProducts[0]?.buyProducts.map(item => (
                                        <h1 key={item.productId.toString()} className="font-bold"><span className="text-lime-500 font-normal">{item.title}</span> * {item.quantityToBuy}</h1>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountPage;