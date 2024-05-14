const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        
    } catch (error) {
        throw new Error('Error initializing the database');
    }
}

module.exports = {
    dbConnection
}