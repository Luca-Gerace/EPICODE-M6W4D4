import express from 'express';
import endpoints from 'express-list-endpoints';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

app.use(cors());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('mongo connected!'))
    .catch((error) => console.error('mongo: connection error -', error));

const PORT = process.env.PORT || 5000;

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
    console.log(`Endpoints list:`);
    console.table(endpoints(app));
})