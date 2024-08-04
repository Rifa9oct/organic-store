import ContactInfo from "@/components/contact/ContactInfo";
import QusAns from "@/components/contact/QusAns";
import HeaderTitle from "@/components/HeaderTitle";

export const metadata = {
    title: "Organic Store | Contact",
    description: "Contact page description",
};

const ContactPage = () => {

    return (
        <div>
            <div className="absolute z-30 top-0 w-full">
                <div className="flex flex-col justify-center items-center h-[442px] bg-[#F8F6F3]">
                    <h1 className="text-[52px] font-extrabold">Get In Touch</h1>
                </div>
                <div className="-mt-[90px]">
                    <ContactInfo />
                </div>
            </div>

            <div className="md:mt-[650px] mt-[980px]">
                <HeaderTitle title="Frequently Asked Question!" />
                <QusAns />
            </div>
        </div>
    );
};

export default ContactPage;