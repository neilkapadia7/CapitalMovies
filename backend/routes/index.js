const express = require('express')
const router = express.Router()
const userRoutes = require('@routes/user')
const favouritesRoutes = require('@routes/favourites')

router.use('/user', userRoutes)
router.use('/favourites', favouritesRoutes)

router.post('/addUser', (req, res) => {
    res.json({message: 'Hey! Welcome to ProForms'})
})

module.exports = router