# Type Error in TypeScript Addition

This repository demonstrates a common type error in TypeScript that arises when performing arithmetic operations with mismatched types. The `add` function is defined to accept two numbers, but the code attempts to pass a string as one of the arguments.  This causes a compile-time error, preventing the program from running.

The solution involves using type guards or explicit type conversions to ensure that the function receives the correct types before performing the addition.