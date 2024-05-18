import express from 'express';
import { connectDB, getDatabaseName } from './models/db.js';

const app = express();
const PORT = process.env.PORT || 3001;

const startServer = async () => {
    await connectDB();

    app.get('/', (req, res) => {
        const dbName = getDatabaseName();
        res.send(`helo: ${dbName}`);
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();
