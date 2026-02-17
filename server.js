const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load env vars
dotenv.config();

// Configs
require('./config/firebase'); // Initialize Firebase

// Routes
const paymentRoutes = require('./routes/paymentRoutes');
const notificationRoutes = require('./routes/notificationRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true }));

// Route Middlewares
app.use('/api', paymentRoutes);
app.use('/api', notificationRoutes);

// Health Check
app.get('/', (req, res) => {
    res.send('ArenaX Backend is running...');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
