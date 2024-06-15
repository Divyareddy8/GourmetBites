import mongoose from "mongoose";

// Define the database connection function
const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "RESTAURANT"
    })
    .then(() => {
        console.log("Connected to database successfully!");
    })
    .catch((err) => {
        console.log(`Some error occurred while connecting to database! ${err}`);
    });
};

// Export the dbConnection function as the default export
export default dbConnection;
