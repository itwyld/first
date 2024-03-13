const names = ["Владилен", "Ксения", "Андрей", "Виктория"];

// names.push("Алена"); // конец массива
// names.unshift("Виктор"); // начало массива(дольше времени)
// names.shift(); // Вырезает первый элемент массива и запоминает его
// names.pop(); // вырезает последний элемент и запоминает его
// console.log(names.reverse()); // возвращает массив задом наперед, меняя изначальную версию
// console.log(names.toReversed()); // возвращает массив наоборот, не меняя первоначальную версию
// console.log(names.sort()); // сортирует элементы массива по возрастанию
// console.log(names.toSorted()); // сортирует элементы массива не меняя первоначальную конфигурацию
// console.log(names.splice(1, 2)); // удаляет содержимое массива начиная от индекса, передаваемого в первое значения
// console.log(names.toSplice(1, 2)); // тоже самое, но не меняя содержимое первоначального массива

// const greateWoman = "Елена";

// const index = names.indexOf(greateWoman); // поиск индекса значения в массиве
// console.log(index)
// console.log(names[index])

// console.log("Names: ", names);

// const newNames = names.with(2, 'Курю бошки') 
// console.log(newNames)

// const capitalNames = names.map(function(name) {

// })
// console.log(capitalNames)
// console.log(names)

// console.log(names.includes('Игорь'))

const people = [
    {name: 'Владилен', budget: 4200},
    {name: 'Елена', budget: 15100},
    {name: 'Игорь', budget: 300},
    {name: 'Ксения', budget: 7520}
]

// let findPerson

// for(let person of people){
//     if(person.budget === 7520){
//         findPerson = person
//     }
// }

const findedPerson = people.find(function(person){
    return person.budget === 7250
})
console.log(findedPerson)