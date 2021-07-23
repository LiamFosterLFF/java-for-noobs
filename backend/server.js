const express = require('express');
const SMTPPool = require('nodemailer/lib/smtp-pool');
const connectDB = require('./config/db');
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const path = require('path');

const errorHandler = require('./middleware/errorMiddleware');

connectDB();

const app = express();

app.use(express.json());
app.use('/api/products', require('./routes/productRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/payment', require('./routes/paymentRoutes'));
app.use('/api/private', require('./routes/privateRoutes'));
// Error (last)
app.use(require('./middleware/errorMiddleware'))

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,'..', '/frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
    })
} else {
    app.get('/', (req, res) => {
        res.send("API running");
    })
}

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => { console.log(`Server started at http://localhost:${PORT}`) });

process.on("unhandledRejection", (err, promise) => {
    console.log(`Logged Error: ${err}`);
    server.close(() => process.exit(1))
})

