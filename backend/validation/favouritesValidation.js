const ValidationRule = require('@service/validation')
module.exports = {
  addFavourites() {
    return [
      ValidationRule.isNumber('id'),
      ValidationRule.isString('backdrop_path'),
      ValidationRule.isString('original_language'),
      ValidationRule.isString('poster_path'),
      ValidationRule.isString('overview'),
      ValidationRule.isString('media_type'),
      ValidationRule.isNumber('vote_average'),
      ValidationRule.isNumber('vote_count'),
      ValidationRule.isNumber('popularity'),
      ValidationRule.requiredArray('genre_ids'),      
    ]
  },
}