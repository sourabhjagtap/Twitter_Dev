const {TweetRepository, HashtagRepository} = require('../repository/index');
class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }

    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.substring(1));//it extracts hashtags
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags) || [];
        let titleOfPresenttags = alreadyPresentTags.map(tags => tags.title);
        let newTags = tags.filter(tag => !titleOfPresenttags.includes(tag));
        newTags = newTags.map(tag => {
           return {title: tag, tweets: [tweet.id]}
        });

        await this.hashtagRepository.bulkCreate(newTags)
        alreadyPresentTags.forEach((tag)=>{
            tag.tweets.push(tweet.id);
            tag.save();
        });
        //todo create hashtages and add here
        /**
         * 1. bulk create in mongoose
         * 2. filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */
        return tweet;
    }

}

module.exports = TweetService;

/*

*/