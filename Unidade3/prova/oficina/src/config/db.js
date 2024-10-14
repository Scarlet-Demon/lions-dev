import mongoose from "mongoose";

const connectDB = async () => {
    mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_ADDRESS}/${process.env.DB_NAME}`)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((error) => console.log(error)) 
}

export default connectDB