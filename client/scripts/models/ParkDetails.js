var ParkDetails = Backbone.Model.extend({
  defaults: {
    name: '',
    adr_address: '',
    vicinity: '',
    formatted_phone_number: '',
    rating: 'n/a',
    user_ratings_total: 0,
    reviews: '',
    photos: '',
    url: '',
    website: ''
  }
});