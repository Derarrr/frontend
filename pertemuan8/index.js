//Rest and Spread Operator

//Destructuring

// const foo = (...params) => {
//     console.log(params);
// };

//Rest Parameter
// const penjumlahanArray = (...params) => {
//     let total = 0
//     params.forEach(item =>{
//         total += item;
//     });
//     console.log(total);
// };
// penjumlahanArray(1, 2, 3);


// //Spread Operator

// let array1 = [1, 2, 3, 4, 5];

// console.log(...array1);

// // 1. Duplikasi array
// let array2 = array1;
// array1.push(6)
// console.log(array2);
// console.log(`Array 1 = ${array1}`);
// console.log(`Array 2 = ${array2}`);

// //2. Menggabungkan array
// let array1 = [1, 2, 3];
// let array2 = [5, 6, 7];
// let array3 = [8, 9, 10];

// let combineArray5 = array1.concat(4, array2, array3);
// console.log(combineArray5);

// let combineArray6 = [...array1, ...array2, ...array3];
// console.log(combineArray6);

// //Duplikasi objek
// let john = {
//     fullName: "John Doe",
//     age: 30,
//     address: "Manado"}

// let student = {...john};
// john = {...john, job: "Teacher"};
// console.log(john);

// //Menggabungkan Objek
// let obj1 = {a: 1, b: 2};
// let obj2 = {c:3, d: 4};

// let combineObject = {...obj1,...obj2}
// console.log(combineObject)

//Destructuring
let fruits = ["apel", "klengkeng", "durian"]
let [, , buah3] = fruits
    // let [buah1, buah2, buah3] = fruits
// console.log(buah1)
// console.log(buah2) #untuk semua buah
console.log(buah3)


