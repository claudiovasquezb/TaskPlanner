const { Schema, model } = require('mongoose');

const LabelSchema = Schema({
    title: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    }
});

const CardSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    label: {
        type: [LabelSchema]
    }
});

const BoardSchema = Schema({
    title: {
        type: String,
        required: true
    },
    card: {
        type: [CardSchema]
    }
});


module.exports = model('Board', BoardSchema);