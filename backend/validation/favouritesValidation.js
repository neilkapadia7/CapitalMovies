const ValidationRule = require('@service/validation')
module.exports = {
  addFavourites() {
    return [
      ValidationRule.isNumber('movieId'),
      ValidationRule.isString('backdrop_path'),
      ValidationRule.isString('original_language'),
      ValidationRule.isString('first_air_date'),
      ValidationRule.isString('poster_path'),
      ValidationRule.isString('name'),
      ValidationRule.isString('overview'),
      ValidationRule.isString('original_name'),
      ValidationRule.isString('media_type'),
      ValidationRule.isString('original_name'),
      ValidationRule.isString('origin_country'),
      ValidationRule.isNumber('vote_average'),
      ValidationRule.isNumber('vote_count'),
      ValidationRule.isNumber('popularity'),
      ValidationRule.isNumber('genre_ids'),      
    ]
  },
}