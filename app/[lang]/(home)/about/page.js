import Countup from "@/components/about/Countup";
import ImageSlider from "@/components/about/ImageSlider";
import Image from "next/image";
import Link from "next/link";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const metadata = {
    title: "Organic Store | About",
    description: "About page description",
};

const AboutPage = () => {
    return (
        <>
            <div className="absolute z-30 top-0 w-full">
                <div className="relative flex flex-col justify-center items-center h-[342px] bg-[#F8F6F3]">
                    <h1 className="text-[52px] font-extrabold">About Us</h1>
                    <div className="absolute -bottom-10 ">
                        <Image src="/leaf.png" width={162} height={69} alt="banner" />
                    </div>
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row p-8 lg:p-0 justify-between items-center mt-[300px] lg:mt-[350px] mb-[60px] lg:mb-[100px]">
                <div>
                    <h1 className="text-4xl font-extrabold">We Are Your Favourite Store</h1>
                    <p className="lg:w-[510px] my-5 text-gray-500">Tuas quisquam quo gravida proident harum, aptent ligula anim consequuntur, ultrices mauris, nunc voluptates lobortis, varius, potenti placeat! Fuga omnis. Cubilia congue. Recusandae. Vero penatibus quasi! Nostra tenetur dignissimos ultrices natus distinctio ultrices consequuntur numqu.</p>
                    <p className="lg:w-[510px] text-gray-500 mb-10">Officiis fuga harum porro et? Similique rhoncus atque! Netus blanditiis provident nunc posuere. Rem sequi, commodo, lorem tellus elit, hic sem tenetur anim amet quas, malesuada proident platea corrupti expedita.</p>
                </div>
                <Image src="/about.png" width={580} height={398} alt="banner" />
            </div>

            <div className="bg-black">
                <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row items-center lg:h-[173px] mb-[180px] text-white">
                    <div className="flex lg:flex-col flex-row gap-3 my-8 lg:my-0 lg:gap-0 text-xl font-bold lg:w-[300px]">
                        <p>Numbers Speak For</p>
                        <p>Themselves!</p>
                    </div>

                    <Countup />
                </div>
            </div>

            <div className="max-w-[1320px] mx-auto flex p-5 md:p-0 flex-col lg:flex-row justify-between items-center mb-[80px]">
                <div className="relative md:w-[548px] h-[694px] bg-[#F8F6F3] mb-[80px] rounded-lg">
                    <div className="absolute -top-20 md:left-[48px]">
                        <ImageSlider />
                    </div>
                    <div className="pt-[400px] md:pt-[480px] flex flex-col justify-center items-center">
                        <div className="flex gap-1 justify-center">
                            <FaStar className="mb-4 text-lg text-[#ffbb1e]" />
                            <FaStar className="mb-4 text-lg text-[#ffbb1e]" />
                            <FaStar className="mb-4 text-lg text-[#ffbb1e]" />
                            <FaStar className="mb-4 text-lg text-[#ffbb1e]" />
                            <FaStar className="mb-4 text-lg text-[#ffbb1e]" />
                        </div>
                        <p className="text-gray-700 p-5 md:p-0 text-center md:w-[468px]">Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        <div className="flex items-center justify-center gap-4 mt-4">
                            <Image src="/person1.png" width={100} height={100} alt="person" className="w-[55px] h-[55px] rounded-full" />
                            <p className="text-gray-700">Mila Kunit</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start md:ml-[100px]">
                    <div className="flex items-center gap-6 md:gap-10">
                        <Image src="/about-logo.png" width={117} height={92} alt="banner" />
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Certified Products</h3>
                            <p className="text-gray-600">Click edit button to change this text. Lorem ipsum <br /> dolor sit amet</p>
                        </div>
                    </div>

                    <h1 className="text-2xl md:text-4xl font-extrabold text-center lg:text-start mt-8 mb-5">We Deal With Various Quality <br /> Organic Products!</h1>
                    <Image src="/little-leaf.png" width={75} height={33} alt="banner" />

                    <div className="flex gap-10 md:gap-[150px] list-none mt-8 text-gray-600">
                        <div>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Fresh fruits</li>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Dry fruits</li>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Fresh vegetables</li>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Dried vegetables</li>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Dried vegetables</li>
                        </div>

                        <div>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Beauty products</li>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Milk products</li>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Organic honey</li>
                            <li className="mb-3"><IoMdCheckmarkCircleOutline className="mr-2 text-lime-500 text-xl inline-block" />Organic tea</li>
                        </div>
                    </div>

                    <Link href="/shop">
                        <button className="mt-4 bg-lime-600 text-sm hover:bg-lime-500 text-white px-8 py-3 rounded-md">
                            <FaShoppingCart className="inline-block text-lg mb-[2px] mr-2" />START SHOPPING</button>
                    </Link>
                </div>
            </div >

        </>
    );
};

export default AboutPage;