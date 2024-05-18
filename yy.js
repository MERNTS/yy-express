import express from 'express';
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello its a good World!');
});

mongoose.connect(process.env.MONGO_YY)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
