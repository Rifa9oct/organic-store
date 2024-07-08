import Image from "next/image";

const Brands = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start  gap-16 lg:mx-[350px] my-[60px]">
            <h1 className="text-2xl font-bold">Featured Brands:</h1>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-8 lg:gap-20 items-center">
                <Image src="/brands/brand3.png" width={140} height={96} alt="brand-logo" />
                <Image src="/brands/brand1.png" width={160} height={96} alt="brand-logo" />
                <Image src="/brands/brand2.png" width={160} height={96} alt="brand-logo" />
                <Image src="/brands/brand4.png" width={130} height={96} alt="brand-logo" />
            </div>
        </div>
    );
};

export default Brands;