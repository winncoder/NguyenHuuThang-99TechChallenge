import promptSync from 'prompt-sync';
const prompt = promptSync();

/**
 * ---------------------------------------------------------
 * sum_to_n_a: Uses the arithmetic series formula to calculate the sum from 1 to n.
 * Formula: n * (n + 1) / 2
 * 
 * Time Complexity: O(1) - Constant time because it only involves a few arithmetic operations.
 * Space Complexity: O(1) - Only a constant amount of space is used.
 * 
 * Efficiency: This is the most efficient solution because it performs the calculation in constant time.
 */
function sum_to_n_a(n: number): number {
    return (n * (n + 1)) / 2;
}

/**
 * ---------------------------------------------------------
 * sum_to_n_b: Uses bitwise operations to optimize the arithmetic series formula.
 * - If n is even: (n >> 1) * (n + 1)
 * - If n is odd: ((n + 1) >> 1) * n
 * 
 * Time Complexity: O(1) - Only a few arithmetic and bitwise operations are performed.
 * Space Complexity: O(1) - Only a constant amount of space is used.
 * 
 * Efficiency: This approach is slightly faster on some systems due to the use of bitwise shifts,
 * but the overall complexity is still O(1). It is more of an optimization trick.
 */
function sum_to_n_b(n: number): number {
    if ((n & 1) === 0) {
        return (n >> 1) * (n + 1);
    } else {
        return ((n + 1) >> 1) * n;
    }
}

/**
 * ---------------------------------------------------------
 * * sum_to_n_c: Uses Array.from() to generate an array from 1 to n, then uses reduce() to sum the elements.
 * 
 * Time Complexity: O(n) - The array is generated with n elements and reduce() iterates over all of them.
 * Space Complexity: O(n) - An array of size n is created in memory.
 * 
 * Efficiency: This is the least efficient solution due to the overhead of array creation and iteration.
 * However, it is more readable and flexible if more complex operations were needed.
 */
function sum_to_n_c(n: number): number {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc + cur, 0);
}

// ---------------------------------------------------------
// Prompt the user to enter a positive integer
let n: number;
while (true) {
    const input = prompt('Enter a positive integer: ');
    n = parseInt(input);

    if (isNaN(n) || n <= 0) {
        console.log('Invalid input. Please enter a positive integer.');
    } else {
        break;
    }
}

const result_a = sum_to_n_a(n);
const result_b = sum_to_n_b(n);
const result_c = sum_to_n_c(n);

console.log(`Sum from 1 to ${n} using sum_to_n_a is: ${result_a}`);
console.log(`Sum from 1 to ${n} using sum_to_n_b is: ${result_b}`);
console.log(`Sum from 1 to ${n} using sum_to_n_c is: ${result_c}`);
