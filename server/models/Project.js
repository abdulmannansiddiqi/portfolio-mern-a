const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  desc: { type: String, required: true },
  image: { type: String, required: true },
  live: { type: String },
  github: { type: String },
  tags: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);