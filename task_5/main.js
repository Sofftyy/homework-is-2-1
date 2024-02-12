let users = [
    { name: 'Миша', age: 25 },
    { name: 'Влад', age: 30 },
    { name: 'Бобка', age: 35 }
];

for (let user of users) {
    console.log(user.age);
}

for (let user of users) {
    user.age += 1;
}

console.log("После увеличения возраста на 1:");
for (let user of users) {
    console.log(user.age);
}