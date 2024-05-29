require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/users/routes');
const gameRoutes = require('./routes/games/routes');
const { generateMatches } = require('./mockDataGenerator');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS
app.use(morgan('dev')); // Logger
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api/users', userRoutes);
app.use('/api/games', gameRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Sports Betting API!');
});

// Generate initial mock data for testing
const mockData = generateMatches(10); // Adjust the number as needed
console.log(JSON.stringify(mockData, null, 2));

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
