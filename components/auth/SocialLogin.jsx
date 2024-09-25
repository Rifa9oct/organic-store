"use client"

import { signIn } from "next-auth/react";

const SocialLogin = () => {

    const handleAuth = (provider) => {
        signIn(provider, { callbackUrl: '/' });
    }

    return (
        <div className="mt-4 flex gap-4">
            <button
                className="w-1/2 py-2 text-center text-white bg-blue-800 rounded uppercase font-roboto font-medium text-sm hover:bg-blue-700">Facebook
            </button>
            <button
                onClick={() => handleAuth("google")}
                className="w-1/2 py-2 text-center text-white bg-lime-600 rounded uppercase font-roboto font-medium text-sm hover:bg-lime-500">Google
            </button>
        </div>
    );
};

export default SocialLogin;