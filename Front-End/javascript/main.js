function convert(celsius) {
  var fahrenheit = celsius * 9/5 + 32;

  if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}

convert(0);
convert(-30);
convert(-10);
convert(20);
convert(30); 
