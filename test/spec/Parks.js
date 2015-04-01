describe("Parks collection", function() {

  it("should have a length of two when two Park models are added to it", function(){
    var parks = new Parks();
    var park1 = new Park();
    var park2 = new Park();
    parks.add(park1);
    parks.add(park2);

    expect(parks.length).to.equal(2);
  });

  
});
