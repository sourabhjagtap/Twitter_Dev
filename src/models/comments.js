import mongoose from 'mongoose';
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
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    onModel : {
        type : String,
        required : true,
        enum : ['Tweet' , 'Comment']//comment either on tweet or comment only
    },
    commentable : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        refPath : 'onModel'
    },
    comments:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
}, {timestamps : true});
//timestamp automatically adds createdAt and updatedAt valuse to the json

const Comment = mongoose.model('Comment', commentSchema);//This model help to connect to the server
export default Comment;