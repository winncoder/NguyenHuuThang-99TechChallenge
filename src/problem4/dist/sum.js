"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function sum_to_n_a(n) {
    return (n * (n + 1)) / 2;
}
function sum_to_n_b(n) {
    if ((n & 1) === 0) {
        return (n >> 1) * (n + 1);
    }
    else {
        return ((n + 1) >> 1) * n;
    }
}
function sum_to_n_c(n) {
    return Array.from({ length: n }, (_, i) => i + 1).reduce((acc, cur) => acc + cur, 0);
}
let n;
while (true) {
    const input = prompt('Enter a positive integer: ');
    n = parseInt(input);
    if (isNaN(n) || n <= 0) {
        console.log('Invalid input. Please enter a positive integer.');
    }
    else {
        break;
    }
}
const result_a = sum_to_n_a(n);
const result_b = sum_to_n_b(n);
const result_c = sum_to_n_c(n);
console.log(`Sum from 1 to ${n} using sum_to_n_a is: ${result_a}`);
console.log(`Sum from 1 to ${n} using sum_to_n_b is: ${result_b}`);
console.log(`Sum from 1 to ${n} using sum_to_n_c is: ${result_c}`);
//# sourceMappingURL=sum.js.map