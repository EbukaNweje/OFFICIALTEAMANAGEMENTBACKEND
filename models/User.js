const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // , //unique: true Unique email for each user
  },

  phoneNumber: {
    type: String,
    required: true,
  },

  payment: {
    type: String,
    required: true,
  },

  homeAddress: {
    type: String,
    required: true,
  },

  paymentMethods: {
    type: String,
    required: true,
  },
  
  isAdmin: {
    // Role of user it will be (normal or admin )
    type: Boolean,
    default: false,
  },

}, {timestamps: true});

module.exports = User = mongoose.model('User', UserSchema )

