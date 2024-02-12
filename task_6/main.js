let companies = {
    companyA: {
        name: 'Компания A',
        employees: ['Миша', 'Бобка', 'Тайлер']
    },
    companyB: {
        name: 'Комания B',
        employees: ['Данил', 'Стас', 'Лиза']
    }
};

// Выводим имена сотрудников для каждой компании
for (let company in companies) {
    console.log(`Сотрудники компании ${companies[company].name}:`);
    for (let employee of companies[company].employees) {
        console.log(employee);
    }
    console.log('------------------');
}