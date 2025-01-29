const mongoose = require("mongoose")

const connectDB = () => {
    mongoose.connect('mongodb://root:example@mongo');

    mongoose.connection.on("connected", () => {
        console.log("Connected to MongoDB successfully! 🚀");
    });

    mongoose.connection.on("error", (err) => {
        console.error("Error connecting to MongoDB:", err.message);
    });
};

module.exports = connectDB;