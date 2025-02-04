const mongoose = require('mongoose');
/**
 * this schema gives the structure of the json document
 * that we have to store the data of tweet
 * i.e blueprint of document   
 */
const tweetSchema = new mongoose.Schema({
    content :{
        type: String,
        required : true
    },
    userEmail: {//can or can not be there
        type: String
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
        
    ]
        
    
}, {timestamps : true});
//timestamp automatically adds createdAt and updatedAt valuse to the json

tweetSchema.virtual('contentWithEmail').get(function process(){
    return `${this.content} \n Created by ${this.userEmail}`;
});

const Tweet = mongoose.model('Tweet', tweetSchema);//This model help to connect to the server
module.exports = Tweet;