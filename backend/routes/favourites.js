const express = require('express')
const router = express.Router()
const Validation = require('@validation/favouritesValidation')
const Responder = require('@service/response')
const Auth = require('@middleware/Auth')
const {addFavourites, getFavourites} = require('@controllers/Favourites')

router.post('/add',
    Auth,
    Validation.addFavourites(),
    Responder.validate.bind(Responder),
    addFavourites
);

router.post('/get',
    Auth,
    getFavourites
);

module.exports = router