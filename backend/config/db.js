import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://yadneshdatabase:tyurcGnJrLiOoREX@cluster0.1zdsc6o.mongodb.net/food-del", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
};