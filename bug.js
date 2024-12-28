function foo(a, b) {
  if (a === null || b === null) {
    return 0; // This line is problematic
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(1, 1)); // Output: 2