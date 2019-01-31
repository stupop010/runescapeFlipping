const mongoose = require('mongoose');
const { Schema } = mongoose;

const favouriteSchema = new Schema({ 
    name: String,
    id: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
});

mongoose.model('favourite', favouriteSchema)