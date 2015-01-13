// 

//manoj@ loggly.com

// calculator at least + -

function complexNumberCalc(operator, numberOne, numberTwo) {
 // if not valid inputs, throw error
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
  outPutReal = numberOneReal * numberTwoReal;
  outPutImaginary = numberOneImaginary * numberTwoImaginary;
 }

 if (operator === "/") {
  outPutReal = numberOneReal / numberTwoReal;
  outPutImaginary = numberOneImaginary / numberTwoImaginary;
 }

 return outPutReal + " + " + outPutImaginary +"i" ;
}


// console.log(complexNumberCalc("-", "3.3 + 2.0i", "4.2 + 3.1i"));