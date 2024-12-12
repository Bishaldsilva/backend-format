import { db_name } from "../constants.js"
import mongoose from "mongoose"

const connectDb = async () => {
    try {
        const host = await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`);
        console.log("Connection established, Host Name is: ", host.connection.host);
    } catch (error) {
        console.log("Mongodb Connection Error: ", error);
    }
}

export default connectDb;