import passport from "passport";

export const authenticate = (req, res, next) =>{0
    console.log(req.content);
    passport.authenticate('jwt', (err, user, data) => {
        if(err)next(err);
        if(!user){
            return res.status(401).json({
                message: "Unauthrised access"
            });
        }
        req.user = user;
        /**
         * by this above line no 11 we can able to get user data whenever he/she login 
         * so that we dont need to pass the user data (like userId, email etc) from the api call everytime
         */
        next();
    })(req, res, next);
}