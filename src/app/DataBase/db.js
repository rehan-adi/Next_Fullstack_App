import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
    } catch (error) {
        throw new Error("Connection Failed");
        console.log(error);
    }
}

export default connect;
