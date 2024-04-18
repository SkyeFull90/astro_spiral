const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(`A MongoDB connection or specific mongodb Error has occurred: ${err.message}`);
    }
}

module.exports = connectDB;