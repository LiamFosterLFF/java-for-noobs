import express from 'express';
import data from './data/products';
import connectDB from './config/db';
require('dotenv').config();
import productRoutes from './routes/productRoutes';

connectDB();

const app = express();

app.use(express.json());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000


app.listen(PORT, () => { console.log(`Server started at http://localhost:${PORT}`) });

