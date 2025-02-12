import mongoose from 'mongoose';
/**
 * this schema gives the structure of the json document
 * that we have to store the data of tweet
 * i.e blueprint of document   
 */
const tweetSchema = new mongoose.Schema({
    content :{
        type: String,
        required : true,
        max : [250, 'Tweet cannot be ore than 250 characers']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag'
        }
    ]
}, {timestamps : true});
//timestamp automatically adds createdAt and updatedAt valuse to the json

const Tweet = mongoose.model('Tweet', tweetSchema);//This model help to connect to the server
export default Tweet;