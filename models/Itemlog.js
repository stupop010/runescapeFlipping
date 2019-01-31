const mongoose = require('mongoose');
const { Schema } = mongoose;

const ItemsLogSchema = new Schema({
    picture: String,
    name: String,
    limit: String,
    buyFor: Number,
    sellFor: Number,
    howMany: Number,
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    date: Date
})

mongoose.model('itemLog', ItemsLogSchema)