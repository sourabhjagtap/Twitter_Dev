const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comments');

app.listen(3000, async ()=>{
    console.log("Server started at PORT:",3000);
    await connect();
    console.log("Mongodb connected");
    /* To add new Tweet */
    // const tweet =await Tweet.create({
    //     content: 'Third tweet'
    // });

    /* To fetch new Tweet */
    // const tweet = await Tweet.find();
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.getAll(0,4)

    console.log(tweet[0].contentWithEmail);
});
