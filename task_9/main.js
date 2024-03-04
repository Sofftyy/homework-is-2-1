function find_fruit_with_most_quantity(fruits) {
    let maxQuantity = 0;
    let fruitWithMostQuantity = '';

    for (let fruit of fruits) {
        let quantity = parseInt(prompt(`Введите количество ${fruit}:`));

        if (quantity > maxQuantity) {
            maxQuantity = quantity;
            fruitWithMostQuantity = fruit;
        }
    }

    return fruitWithMostQuantity;
}

let fruits = ['яблоко', 'груша', 'апельсин', 'банан'];
let fruitWithMostQuantity = find_fruit_with_most_quantity(fruits);

console.log(`Фрукт с наибольшим количеством: ${fruitWithMostQuantity}`);