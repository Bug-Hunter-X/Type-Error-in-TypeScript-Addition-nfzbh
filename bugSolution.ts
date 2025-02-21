function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error("Invalid input: Both arguments must be numbers or parseable strings.");
  }
  return numA + numB;
}

let result1 = add(5, 10); // Correct usage
let result2 = addSafe(5, "10"); // Correct usage with string handling
let result3 = addSafe("5", "10"); // Correct usage with two strings
console.log(result1,result2,result3); // Output: 15 15 15

//try{let result4 = addSafe("abc",10)}catch(error){console.log(error)} // Output: Error: Invalid input: Both arguments must be numbers or parseable strings.