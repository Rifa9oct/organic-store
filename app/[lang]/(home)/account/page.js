import { auth } from "@/auth";
import UploadImage from "@/components/action-button/UploadImage";
import { getUserByEmail } from "@/queries/user-queries";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const AccountPage = async () => {
    const session = await auth();
    const getUser = await getUserByEmail(session?.user?.email);
    const user = getUser[0];

    const imageApiKey = process.env.IMAGE_HOSTING_KEY;

    return (
        <div className="mb-[100px]">
            <div className="flex flex-col justify-center items-center">
                <div className="relative">
                    {
                        user?.image ? (
                            <div className="w-[200px] h-[200px] rounded-full border-2 border-gray-600 overflow-hidden">
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
        </div>
    );
};

export default AccountPage;