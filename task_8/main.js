function filterPowers(numbers, base) {
    return numbers.filter(num => Number.isInteger(Math.log(num) / Math.log(base)));
}
const numbers = [1, 2, 3, 4, 8, 9, 16, 27];
const base = 2;
const result = filterPowers(numbers, base);
console.log(result); 