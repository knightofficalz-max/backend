const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const oneSignalClient = axios.create({
    baseURL: 'https://onesignal.com/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${process.env.ONESIGNAL_REST_API_KEY}`
    }
});

module.exports = oneSignalClient;
