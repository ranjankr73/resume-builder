const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  personalInfo: {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: { type: String, required: true },
    summary: { type: String, required: true }
  },
  experience: [{
    company: { type: String, required: true },
    position: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    description: { type: String, required: true }
  }],
  education: [{
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    description: String
  }],
  skills: [{
    name: { type: String, required: true }
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('Resume', resumeSchema);
