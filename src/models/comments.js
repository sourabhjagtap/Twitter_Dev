const mongoose = require('mongoose');
/**
 * this schema gives the structure of the json document
 * that we have to store the data of tweet
 * i.e blueprint of document   
 */
const commentSchema = new mongoose.Schema({
    content :{
        type: String,
        required : true
    },
    userEmail: {//can or can not be there
        type: String
    },
}, {timestamps : true});
//timestamp automatically adds createdAt and updatedAt valuse to the json

const Comment = mongoose.model('Comment', commentSchema);//This model help to connect to the server
module.exports = Comment;