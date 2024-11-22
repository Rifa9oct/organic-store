import Image from "next/image";

const HeaderTitle = ({ title }) => {
    return (
        <div>
            <div data-aos="fade-down"  data-aos-duration="1000"
                className="flex flex-col justify-center items-center mb-16">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-3">{title}</h1>
                <Image src="/little-leaf.png" width={75} height={33} alt="banner" />
            </div>
        </div>
    );
};

export default HeaderTitle;