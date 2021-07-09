import express from 'express';
import data from './data'
import { config } from 'dotenv';
const app = express();

const PORT = process.env.PORT || 5000

app.get('/api/products', (req, res) => {
    res.send(data.products)
});

app.listen(PORT, () => { console.log(`Server started at http://localhost:${PORT}`) });

