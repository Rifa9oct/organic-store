import LoginForm from "@/components/auth/LoginForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";
import { getDictionary } from "../../dictionaries/dictionaries";

export const metadata = {
    title: "Organic Store | Login page",
    description: "Login page description",
};

const LoginPage = async ({ params:{lang} }) => {
    const dict = await getDictionary(lang);

    return (
        <div className="contain pb-[100px] pt-8 px-5 lg:px-0">
            <div className="max-w-lg mx-auto shadow-lg border px-6 py-7 rounded overflow-hidden">
                <h2 className="text-2xl uppercase font-medium mb-1">{dict.Login}</h2>
                <p className="text-gray-600 mb-6 text-sm">
                    {dict.Welcome}
                </p>

                <LoginForm dict={dict} />

                <div className="mt-6 flex justify-center relative">
                    <div className="text-gray-600 px-3 bg-white z-10 relative">{dict.LoginWith}</div>
                    <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
                </div>

                <SocialLogin dict={dict} />

                <p className="mt-4 text-center text-gray-600">{dict.DoNotAccount}?
                    <Link href="/register" className="text-lime-500"> {dict.RegisterNow}</Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;