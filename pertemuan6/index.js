//string literal
//-------------------

// let fullName = "John Doe";
// let age = 33;
// let address = "Manado";

//  //Hallo nama saya John Doe, umur saya 33 tahun dan saya tinggal di manado

//  let kalimat5 = "Hallo nama saya" + fullName + ", umur saya " + age + " tahun dan saya tinggal di " + address;

//  console.log(kalimat5);

//  let kalimat6 = `halo nama saya ${fullName},  umur saya ${age}, dan saya tingal di Manado`

//  console.log(kalimat6)

// ////Arrow Function
// //================

// function sayGreetings(nama){
//     return `Hello ${nama}`;
// }

// console.log(sayGreetings ("John"));

// const sayGreetings6 = () => {
//     return `Hello ${nama}`;
// };

// console.log(sayGreetings6())

// //Inplicit return value
// const sayGreetings6 = (nama) => `Hello ${nama}`;
// console.log(sayGreetings6());


// //Pada IIFE
// (() => {
//     console.log("Hello")
// })();

// //Pada Callback
// let numbers = [1,2,3,4,5];
// let output2 = numbers.map((item) => item);
// console.log(output2);

//Default Parameter
//------------------------

// const sayGreetings = (fullName) => {
//     console.log(fullName);
// }; ////(cara lama)

// sayGreetings("Peter");

const sayGreetings = (fullName) => {
        if (fullName === underfined){
            fullName = "John Doe"
        }
        if (age === underfined){
            age = 30;
        }
        console.log(`Hello ${fullName}`)
    }

sayGreetings5();

const sayGreetings6 = (fullName = "John Doe", age = 30) => {
  console.log(`Hello ${fullName}`);
};
    
sayGreetings6("Peter");
    