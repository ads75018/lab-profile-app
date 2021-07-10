const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userschema = new Schema({
  username: String,
  password: String,
  campus: {
    type: String,
    enum: [
      'Madrid',
      'Barcelona',
      'Miami',
      'Paris',
      'Berlin',
      'Amsterdam',
      'Mexico',
      'Sao Paulo',
      'Lisbon',
    ],
  },
  course: { type: String, enum: ['Web Dev', 'UX/UI', 'Data Analystics'] },
  image: String,
});

const User = mongoose.model('User', userschema);

module.exports = User;
