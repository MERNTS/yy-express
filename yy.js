import express from 'express';
import connectDB from './models/db.js';
const PORT = process.env.PORT || 3001;

const app = express();
connectDB();

app.get('/', (req, res) => {
    res.send('helo expressers!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});