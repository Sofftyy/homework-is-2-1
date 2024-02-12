let numbers = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;
let count = 0;

for (let subArray of numbers) {
    for (let element of subArray) {
        sum += element;
        count++;
    }
}

console.log("Сумма всех элементов: " + sum);
console.log("Количество элементов: " + count);