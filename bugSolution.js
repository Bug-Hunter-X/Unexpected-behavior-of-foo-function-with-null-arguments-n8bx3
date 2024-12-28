function foo(a, b) {
  if (a === null || b === null) {
    //Handle null values appropriately. Options include: 
    // 1. Return null: 
    return null; 
    // 2. Throw an error: 
    // throw new Error('Arguments cannot be null');
    // 3. Use default values:
    // a = a || 0; b = b || 0; return a + b;
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(1, 1)); // Output: 2