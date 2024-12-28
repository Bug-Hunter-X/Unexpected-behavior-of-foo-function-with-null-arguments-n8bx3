# Unexpected behavior of foo function with null arguments

This repository demonstrates an uncommon bug in JavaScript related to null value handling in a function. The function `foo` unexpectedly returns 0 when one of its arguments is null. This behavior might not be the expected outcome in all scenarios. The solution demonstrates how to handle null values gracefully and make the function more robust.

## Bug

The `bug.js` file shows the function `foo` and its unexpected behavior when given null arguments. The function is supposed to add the two input numbers (a and b) but it doesn't handle null values effectively.  It simply returns 0 regardless of whether only one or both arguments are null, resulting in a potentially unexpected result. 

## Solution

The `bugSolution.js` file offers a modified version of `foo` that better addresses null values. It either returns null when encountering any null arguments or throws a specific error. You can choose the appropriate approach that best suits your project's requirements.