describe('calc', function() {
  it('should be able to add', function() {
    expect(complexNumberCalc('+', '1 + 2i','2 + 3i')).to.equal('3 + 5i');
  });
  it('should be able to subtract', function() {
    expect(complexNumberCalc('-', '5 + 3i','2 + 1i')).to.equal('3 + 2i');
    expect(complexNumberCalc('-', '5 + 3i','7 + 4i')).to.equal('-2 - 1i');
  });
  it('should be able to divide', function() {
    expect(complexNumberCalc('/', '6 + 6i','2 + 1i')).to.equal('3 + 6i');
  });
  it('should be able to multiply', function() {
    expect(complexNumberCalc('*', '2 + 2i','2 + 3i')).to.equal('4 + 6i');
  });
});
