const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema')

const DevSchema = new mongoose.Schema({
  login: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});

module.exports = mongoose.model('Dev', DevSchema);