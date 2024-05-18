import mongoose from "mongoose";

const db = process.env.MONGO_YY;
let databaseName = '';

const connectDB = async () => {
    try {
        await mongoose.connect(db, {});
        databaseName = mongoose.connection.db.databaseName; // Update the module-level variable
        console.log(`Connected to database: ${databaseName}`);
    } catch (err) {
        console.error('error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

const getDatabaseName = () => databaseName;

export { connectDB, getDatabaseName };
