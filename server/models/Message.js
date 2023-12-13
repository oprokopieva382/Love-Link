const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// This is a subdocument schema; it won't become its own model but it 
// will be used as the schema for the User's 'inbox' and 'outbox' arrays in User.js
const messageSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    read: {
        type: Boolean,
        required: true,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // get: timestamp => dateFormat(timestamp)
      },
});

module.exports = messageSchema;