const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    end_year: {
        type: Number
    },
    start_year: {
        type: Number
    },
    intensity: {
        type: Number
    },
    sector: {
        type: String
    },
    topic: {
        type: String
    },
    insight: {
        type: String
    },
    url: {
        type: String
    },
    region: {
        type: String
    },
    impact: {
        type: String
    },
    country: {
        type: String
    },
    relevance: {
        type: Number
    },
    pestle: {
        type: String
    },
    source: {
        type: String
    },
    title: {
        type: String
    },
    likelihood: {
        type: Number
    },
});

const Data = mongoose.model('DATA', dataSchema);

module.exports = Data;