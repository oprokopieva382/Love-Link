const { Schema } = require('mongoose');

// This is a subdocument schema; it won't become its own model but it 
// will be used as the schema for the User's 'inbox' and 'outbox' arrays in User.js
const messageSchema = new Schema({
    
})