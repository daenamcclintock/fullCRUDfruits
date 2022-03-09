// <-------------- IMPORT DEPENDENCIES -------------->
const mongoose = require('./connection');

// <-------------- DEFINE FRUITS MODEL -------------->
// pull the schema and model constructors from mongoose
// we're going to use something called destructuring to accomplish this
const { Schema, model } = mongoose;

// make our fruits Schema
const fruitSchema = new Schema({
    name: { type: String },
    color: { type: String },
    readyToEat: { type: Boolean }
}, { timestamps: true });

// make our fruit model
const Fruit = model("Fruit", fruitSchema);

// <-------------- EXPORT MODEL -------------->
module.exports = Fruit;