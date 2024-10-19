const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/jobVerificationApp', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'));

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
