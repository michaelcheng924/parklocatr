var ParkDetails = Backbone.Model.extend({
  defaults: {
    // Defaults for Google Maps detail search
    name: '',
    adr_address: '',
    formatted_address: '',
    vicinity: '',
    formatted_phone_number: '',
    rating: 'n/a',
    user_ratings_total: 0,
    reviews: [],
    photos: [],
    url: '',
    website: ''
  }
});