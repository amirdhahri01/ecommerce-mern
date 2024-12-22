import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DATABASE_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Mongodb connection failed : " + error.getMessage());
        process.exit(1)
    }
}

export default connectDB