const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comments');
const Tweet = require('./models/tweet');
const TweetService = require('./services/tweet-service');

app.listen(3000, async ()=>{
    console.log("Server started at PORT:",3000);
    await connect();
    console.log("Mongodb connected");
    const tweets = await Tweet.find({
        content : ["First tweet" , "mytweet" , "123455678"]
    });
    console.log(tweets);
});
