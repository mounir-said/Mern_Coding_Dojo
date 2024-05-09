//Rewrite isPrime() to calculate primes faster:

Number.prototype.isPrime = function() {
  if (this <= 1) return false;
  if (this <= 3) return true;
  
  // Eliminating even numbers (except 2)
  if (this % 2 === 0 || this % 3 === 0) return false;
  
  let i = 5;
  while (i * i <= this) {
      if (this % i === 0 || this % (i + 2) === 0) {
          return false;
      }
      i += 6; // Incrementing by 6 for prime testing optimization
  }
  return true;
}

//Write a more efficient function to reverse a string

function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
  }
  return reversed;
}
