import Link from "next/link";
import Image from "next/image";

export const metadata = {
    title: "404 | Not-Found page",
    description: "Not found page content",
};

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-auto mt-16">
            <Image src="/error.png" width={600} height={600} alt="" />
            <h1 className="text-center font-medium text-2xl mt-8">Sorry, We can not find that page!🙁</h1>
            <div className="mt-5">
                <Link href="/">
                    <button className="bg-red-500 hover:bg-red-600 py-2 px-4 text-white rounded-lg hover:scale-105">Go Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;