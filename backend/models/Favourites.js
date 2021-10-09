const mongoose = require('mongoose');

const favouritesSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true},
    movieId: {type: Number},
    backdrop_path: {type: String},
    original_language: {type: String},
    first_air_date: {type: String},
    poster_path: {type: String},
    name: {type: String},
    title: {type: String},
    overview: {type: String},
    original_name: {type: String},
    media_type: {type: String},
    vote_average: {type: Number},
    vote_count: {type: Number},
    popularity: {type: Number},
    origin_country: [{type: String}],
    genre_ids: [{type: Number}],
},{ 
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

const Favourites = mongoose.model('Favourites', favouritesSchema);

module.exports = Favourites;