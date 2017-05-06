const mongoose = require('mongoose');

const SectionSchema = mongoose.Schema({
    secTitle: String,
    secContent: String
});

const Section = module.exports = mongoose.model('section', SectionSchema);
