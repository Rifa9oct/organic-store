import connectMongo from "@/dbConnect/connectMongo";
import { userModel } from "@/models/user-model";
import { replaceMongoIdInArray } from "@/utils/data-utils";

const getUserByEmail = async (email) => {
    await connectMongo();
    let user = await userModel.find({email});
    return replaceMongoIdInArray(user);
};

export { getUserByEmail }