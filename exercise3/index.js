//Tjiwili, Derald Febri Andriano



let people = ["Greg", "Mary", "Devon", "James"];

//1
for(let i=0; i<people.length; i++){
    console.log(people[i]);
}

//2 
people.forEach(function(item){
    console.log(item)
})

//3
people.shift()

//4
people.pop()

//5
people.unshift("Matt")

//6
people.push("Derald")

//7
for(let i=0; i<people.length; i++){
    console.log(people[i])
    if(people[i] === "Mary"){
        break
    }
}

//8
people.slice(0,1)
let people2 = people.slice(2)
console.log(people2.join())

//9
people.splice(2,1)
people.splice(2,0,0,"Elizabeth","Artie")
setengahPeople1 = people.splice(2, 1)
console.log(people.join())

//10
let withBob = people.concat("Bob")
console.log(withBob.join())

//Object Exercise
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
}

//1
programming.languages.push("Go")
// console.log(programming.languages.join())

//2
// console.log(john["firstName"])
programming["difficulty"] = 7
// console.log(programming["difficulty"])

//3
delete programming.jokes
// console.log(programming)

//4
programming.isFun = true
// console.log(programming)

//5
programming.languages = programming.languages.map(function(language, index) {
    return index + " - " + language;
});
console.log(programming.languages);


