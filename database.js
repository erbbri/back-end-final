const mongoose = require('mongoose');

// Update with your own Database URI
const mongoDB = process.env.MONGODB_URI || 'mongodb+srv://erbb:SPU2022@cluster0.mde2f.mongodb.net/booklog?retryWrites=true&w=majority';

mongoose
    .connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('DB Connected!');
    })
    .catch(error => {
        console.log('Connection Error: ${err.message}');
    });

const db = mongoose.connection;

// Bind the console to errors, to show them on console
db.on('error', console.error.bind(console, 'MongoDB Connection Error'));

module.exports = db;