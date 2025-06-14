// – Дано 2 масиви з рівною кількістю об’єктів.
// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// Записати цей об’єкт в новий масив

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let newArr = [];

for (let i = 0; i < usersWithId.length; i++){
    for (let j = 0; j < citiesWithId.length; j++){
        if (usersWithId[i].id === citiesWithId[j].user_id){
            let obj = {
                id: usersWithId[i].id,
                name: usersWithId[i].name,
                age: usersWithId[i].age,
                status: usersWithId[i].status,
                user_id: citiesWithId[j].user_id,
                country: citiesWithId[j].country,
                city: citiesWithId[j].city
            }
            newArr.push(obj);
        }

    }


}

console.log(newArr)