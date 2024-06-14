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
const ListSchema = Schema({
    title: {
        type: String,
        required: true
    },
    card: {
        type: [CardSchema]
    }
});
const BoardSchema = Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    favorite: {
        type: Boolean,
        default: false
    },
    list: {
        type: [ListSchema]
    },
    user: {
        type: Schema.Types.ObjectId, // Con esto decimos que el type va a ser una referencia
        ref: 'User', // Como referencia ponemos el nombre del schema User
        //required: true
    }
}, { 
    timestamps: true,
    strict: true 
});


module.exports = model('Board', BoardSchema);