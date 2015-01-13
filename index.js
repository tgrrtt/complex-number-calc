$( document ).ready( function() {
  var current;
  var prev;
  var operator;
  $('.equals').on('click', handleEquals);

  $('.add').on('click', function() {
    operator = '+';
    applyOperator(operator);
  });

  $('.subtract').on('click', function() {
    operator = '-';
    applyOperator(operator);
  });

  $('.multiply').on('click', function() {
    operator = '*';
    applyOperator(operator);
  });

  $('.divide').on('click', function() {
    operator = '/';
    applyOperator(operator);
  });

  function applyOperator(operatorType) {
    if (!prev) {
      prev = $('.input').val();
    } else if (prev && !current) {
      current = $('.input').val();
      prev = complexNumberCalc(operatorType, prev, current);
      current = undefined;
      $('.input').val(prev);
    } 
  }

  function handleEquals() {
    if (prev) {
      current = $('.input').val();
      var test = complexNumberCalc(operator, prev, current);
      prev = undefined;
      operator = undefined;
      current = undefined;
      $('.input').val(test);
    }
  }
  
} );
