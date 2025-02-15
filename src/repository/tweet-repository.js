import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository {
    constructor(){
        super(Tweet);
    }
    async create(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id){
        try {
            //populate({path: 'comments'}) displays all the comments
            const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean();//lean convert the returned mongoose object to javascript object 
            return tweet; 
         } catch (error) {
             console.log(error);
         }
    }

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
};

export default TweetRepository;
