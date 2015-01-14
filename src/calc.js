function getConjugate(complexNumber) {
  var splitPositive = complexNumber.split('+');
  var splitNegative = complexNumber.split('-');
  if (splitPositive[0].length === complexNumber.length) {
    return splitNegative[0] + "+" + splitNegative[1];
  } else {
    return splitPositive[0] + "-" + splitPositive[1];
  }
}

function addRealOrImaginary(a, b) {
  var isReal;
  var parsedA;
  var parsedB;
  var result;

  if (a.charAt(a.length-1) !== 'i') {
    isReal = true;
    parsedA = parseInt(a);
    parsedB = parseInt(b);
  } else {
    isReal = false;
    parsedA = parseInt(a.substring(0, a.length - 1));
    parsedB = parseInt(b.substring(0, b.length - 1));
  }

  result = parsedA + parsedB;

  return isReal ? result : result + 'i';
}

function subtractRealOrImaginary(a, b) {
  var isReal;
  var parsedA;
  var parsedB;
  var result;

  if (a.charAt(a.length-1) !== 'i') {
    isReal = true;
    parsedA = parseInt(a);
    parsedB = parseInt(b);
  } else {
    isReal = false;
    parsedA = parseInt(a.substring(0, a.length - 1));
    parsedB = parseInt(b.substring(0, b.length - 1));
  }
  
  result = parsedA - parsedB;

  return isReal ? result : result + 'i';
}

console.log(addRealOrImaginary('3i', '2i'));

function complexNumberCalc(operator, numberOne, numberTwo) {
  var numberOneChunks;
  var numberOneReal;
  var numberOneImaginary;
  var numberTwoChunks;
  var numberTwoReal;
  var numberTwoImaginary;
  var outPutReal;
  var outPutImaginary;
 
  numberOneChunks = numberOne.split("+");
  numberTwoChunks = numberTwo.split("+");
  numberOneReal = parseFloat(numberOneChunks[0]);
  numberOneImaginary = parseFloat(numberOneChunks[1]);
  numberTwoReal = parseFloat(numberTwoChunks[0]);
  numberTwoImaginary = parseFloat(numberTwoChunks[1]);
 
  if (operator === "+") {
     // separate real number and imaginary number somehow
     // split at +, will result in 2 ["chunk1", "chunk2i"]
     // remove the i at end of chunk 2
     // convert both stringed numbers to numbers
     // do this for both inputs
     // add the two fields
     // remember to add back a "+" and "i" to the returned value
   
 
    outPutReal = numberOneReal + numberTwoReal;
    outPutImaginary = numberOneImaginary + numberTwoImaginary;
   }
 
   if (operator === "-") {
    outPutReal = numberOneReal - numberTwoReal;
    outPutImaginary = numberOneImaginary - numberTwoImaginary;
   }
 
   if (operator === "*") {
    // example
    //(2 + 3i) * (4 + 5i) = 2(4 + 5i) + 3i(4 + 5i)
    var complexOneA = numberOneReal * numberTwoReal; // real number
    var complexOneB = numberOneReal * numberTwoImaginary; // i
    var complexTwoA = numberOneImaginary * numberTwoReal; // i
    var complexTwoB = 0 - numberOneImaginary * numberTwoImaginary; // i^2
    var complexChunkOne = complexOneA + complexTwoB;
    var complexChunkTwo = complexOneB + complexTwoA;
    return complexChunkOne + " + " + complexChunkTwo +"i" ;
   }
 
   if (operator === "/") {
    // get conjugate for one divided by
    var conjugate = getConjugate(numberTwo);
    // multiply numberOne with conjugate and numberTwo with conjugate.
    // reduce those results
    // divide
   }
 
  if (outPutImaginary < 0) {
    return outPutReal + " - " + Math.abs(outPutImaginary) +"i" ;
  } else {
    return outPutReal + " + " + outPutImaginary +"i" ;
  }

}


// console.log(complexNumberCalc("-", "3.3 + 2.0i", "4.2 + 3.1i"));
