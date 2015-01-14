describe('calc', function() {
  it('should be able to add', function() {
    expect(complexNumberCalc('+', '1 - 2i','2 + 1i')).to.equal('3 - 1i');
    expect(complexNumberCalc('+', '1 + 2i','2 + 3i')).to.equal('3 + 5i');
  });
  it('should be able to subtract', function() {
    expect(complexNumberCalc('-', '5 + 3i','2 + 1i')).to.equal('3 + 2i');
    expect(complexNumberCalc('-', '5 + 3i','7 + 4i')).to.equal('-2 - 1i');
  });
  it('should be able to divide', function() {
    expect(complexNumberCalc("/", '3 + 2i', '4 - 3i')).to.equal('6/25 + 17i/25');
  });
  it('should be able to multiply', function() {
    expect(complexNumberCalc('*', '2 + 3i','4 + 5i')).to.equal('-7 + 22i');
  });
});

describe('getConjugate', function() {
  it('should return the conjugate of the passed in complex num', function() {
    expect(getConjugate('1 + 1i')).to.equal('1 - 1i');
  })
})

describe('real and imaginary operators', function() {
  describe('addRealOrImaginary', function() {
    it('add real or imaginary numbers', function() {
      expect(addRealOrImaginary('3i', '2i')).to.equal('5i');
      expect(addRealOrImaginary('3', '1')).to.equal(4);
    })
  })
  describe('subtractRealOrImaginary', function() {
    it('subtract real or imaginary numbers', function() {
      expect(subtractRealOrImaginary('3i', '2i')).to.equal('1i');
      expect(subtractRealOrImaginary('3', '1')).to.equal(2);
    })
  })
})

