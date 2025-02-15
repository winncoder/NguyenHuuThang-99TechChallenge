import promptSync from 'prompt-sync';
const prompt = promptSync();


function sum_to_n_a(n: number): number {
    return (n * (n + 1)) / 2;
}

function sum_to_n_b(n: number): number {
    if ((n & 1) === 0) {
        return (n >> 1) * (n + 1);
    } else {
        return ((n + 1) >> 1) * n;
    }
}

function sum_to_n_c(n: number): number {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc + cur, 0);
}


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
