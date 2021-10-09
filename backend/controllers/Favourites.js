const User = require('@models/Users')
const Favourites = require('@models/Favourites')
const Responder = require('@service/response')
const Token = require('@service/token')

/**
    @route POST api/favourites/add
    @description Add to favourites
*/ 
module.exports = {
    async addFavourites(req, res) {
        try {
            const movieId = req.body.id
            const checkUser = await User.findOne({_id: req.user._id});
            if(checkUser) 
                return Responder.respondWithFalseSuccess(req, res, {}, 'User Already Exists');

            const favourites = await new Favourites({
                ...req.body,
                userId: req.user._id,
                movieId
            }).save();

            return Responder.respondWithSuccess(req, res, favourites , 'Successfully Added To Favourites!');    
        }
        catch(err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    },

/**
    @route GET api/favourites/get
    @description Get Favourites
*/ 
    async getFavourites (req, res) {    
        try {
            const checkUser = await User.findOne({email: req.body.email});
            if(!checkUser)                 
                return Responder.respondWithFalseSuccess(req, res, {}, "User Doesn't Exist");

            const favourites = await Favourites.find({userId: req.user._id})
                
            return Responder.respondWithSuccess(req, res, favourites, 'Favourites Fetched')   
            
        } catch (err) {
            console.log(err)
            return Responder.respondWithError(req, res, 'Error')
        }
    }

}
