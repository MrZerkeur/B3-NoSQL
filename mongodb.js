const mongoose = require("mongoose");
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    try {
        console.log("I'M TRYING")
        await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
        console.log(`Connected to MongoDB with ${MONGO_URI}`);
    } catch (err) {
        console.log("IT FAILED")
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;