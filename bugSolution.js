function myFunction(a, b) {
  // Handle null or undefined values for both a and b
  a = a === null || a === undefined ? 0 : a; 
  b = b === null || b === undefined ? 0 : b; 

  return a + b;
}

console.log(myFunction(null, 5)); // Output: 5
console.log(myFunction(5, null)); // Output: 5
console.log(myFunction(5, 5));   // Output: 10
console.log(myFunction(0, 5)); // Output: 5
console.log(myFunction(5, undefined)); // Output: 5