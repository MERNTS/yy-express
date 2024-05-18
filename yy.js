import express from 'express';
const app = express();

const PORT = process.env.PORT || 3001;

// import connectDB from './models/db.js';
// connectDB();

app.get('/', (req, res) => {
    res.send('helo expressers!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});