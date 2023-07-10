import mongoose from "mongoose"

const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "workzen"
    })
        .then((c) => console.log(`Database connected at ${c.connection.host}`))
        .catch(((e) => console.log(e)));
}

export default connectDB;