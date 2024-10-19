const mongoose = require('mongoose');

const verificationRequestSchema = new mongoose.Schema({
   companyName: String,
   userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
   status: { type: String, enum: ['Pending', 'Verified', 'Closed'], default: 'Pending' },
});

module.exports = mongoose.model('VerificationRequest', verificationRequestSchema);
