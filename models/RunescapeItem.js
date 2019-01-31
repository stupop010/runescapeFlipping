const mongoose = require('mongoose');
const { Schema } = mongoose;

const itemSchema = new Schema({
    picture: String,
    name: String,
    limit: String,
})

mongoose.model('items', itemSchema)