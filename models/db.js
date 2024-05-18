import mongoose from "mongoose";

const db =  process.env.MONGO_YY;
// console.log(db)

const connectDB = async() => {
    try{
        await mongoose.connect(db,  {
            useNewUrlParser: true,            
            useUnifiedTopology: true,        
        });
        const databaseName = mongoose.connection.db.databaseName;
        console.log(`Connected to database: ${databaseName}`);
    } catch(err) {
        console.error('error connecting to MongoDB:', err.message);
        process.exit(1);
    }
};


export default connectDB;