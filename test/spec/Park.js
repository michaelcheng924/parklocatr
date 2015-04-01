describe("Park model", function() {

  it("should have default values", function(){
    var park = new Park();
    expect(park.get('Name')).to.equal('');
    expect(park.get('X_Coordinate')).to.equal('');
  });

  
});
