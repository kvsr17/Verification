const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
   name: String,
   email: String,
   password: String,
   jobStatus: { type: String, default: 'Unverified' },
   educationVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
