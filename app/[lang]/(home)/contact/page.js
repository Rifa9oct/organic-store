import ContactInfo from "@/components/contact/ContactInfo";
import QusAns from "@/components/contact/QusAns";
import HeaderTitle from "@/components/HeaderTitle";
import { getDictionary } from "../../dictionaries/dictionaries";

export const metadata = {
    title: "Organic Store | Contact",
    description: "Contact page description",
};

const ContactPage = async ({ params: { lang }}) => {
    const dict = await getDictionary(lang);

    return (
        <div>
            <div className="absolute z-30 top-0 w-full">
                <div className="flex flex-col justify-center items-center h-[442px] bg-[#F8F6F3]">
                    <h1 className="text-[52px] font-extrabold">{dict.GetInTouch}</h1>
                </div>
                <div className="-mt-[90px]">
                    <ContactInfo dict={dict} />
                </div>
            </div>

            <div className="md:mt-[650px] mt-[980px]">
                <HeaderTitle dict={dict} title={dict.FrequentlyAsked} />
                <QusAns dict={dict}/>
            </div>
        </div>
    );
};

export default ContactPage;