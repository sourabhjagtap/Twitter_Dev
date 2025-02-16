import { LikeRepository , TweetRepository } from '../repository/index.js';

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }
    async toggleLike(modelId, modelType, userId){//  /api/v1/likes/toggle?id=modelId&type=Tweet
        //modelId == tweet or comment id i.e on which tweet or comment like
        //modelType == on what i.e like on tweet or commnet
        //userId == liked by which user
        console.log("From like service 1",modelId);
        if(modelType == 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId);
        }else if(modelType=='Comment'){
            //TODO
        }else{//
            throw new Error('Unknown model type');
        }
        //initilization of likable array
        if (!Array.isArray(likeable.likes)) {
            likeable.likes = [];
        }

        const exists = await this.likeRepository.findByUserAndLikeable({
            user : userId,
            onModel : modelType,
            likeable : modelId
        });
        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded = false;
        }else{
            const newlike = await this.likeRepository.create({
                user : userId,
                onModel : modelType,
                likeable : modelId
            });
            likeable.likes.push(newlike);
            await likeable.save();

            isAdded = true;
        }
        return isAdded;
    }
};

export default LikeService;