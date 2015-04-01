var Park = Backbone.Model.extend({
  defaults: {
    'Name': '',
    'Address': '',
    'CityMuni': 'Houston',
    'County': '',
    'State': 'TX',
    'Zip': '',
    'Park_Acres': '',
    'Park_type': '',
    'Flag': '',
    'X_Coordinate': '',
    'Y_Coordinate': ''
  }
});

/*"Name" : "BEVERLY HILLS PARK",
        "Address" : "10111 Kingspoint",
        "CityMuni" : "Houston",
        "County" : "Harris",
        "State" : "TX",
        "Zip" : "77075",
        "Park_Acres" : 22.815370770000001,
        "Park_Type" : "Community Park, Community Center ",
        "Flag" : "M",
        "X_Coordinate" : 3163987.8204160999,
        "Y_Coordinate" : 13790383.07900334*/