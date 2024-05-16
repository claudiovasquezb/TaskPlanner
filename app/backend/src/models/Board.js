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
    },
    user: {
        type: Schema.Types.ObjectId, // Con esto decimos que el type va a ser una referencia
        ref: 'User', // Como referencia ponemos el nombre del schema User
        //required: true
    }
});


module.exports = model('Board', BoardSchema);