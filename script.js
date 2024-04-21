// Part 1: Refactoring Old Code
// let csvArray = [
//     ["ID,Name,Occupation,Age"],
//     [
//         ["42,Bruce,Knight,41"]
//         ["57,Bob,Fry Cook,19"],
//         ["63,Blaine,Quiz Master,58"],
//         ["98,Bill,Doctor’s Assistant,26"]
//     ]
// ]

const header = ["ID", "Name", "Occupation", "Age"];
const row1 = [42, "Bruce", "Knight", 41];
const row2 = [57, "Bob", "Fry Cook", 19];
const row3 = [63, "Blaine", "Quiz Master", 58];
const row4 = [98, "Bill", "Doctor's Assistant", 26];

const table = [header, row1, row2, row3, row4];
console.log(table)

// Part 2: Expanding Functionality
// let csvArray2 = [
//     ["ID,Name,Occupation,Age"],
//     ["42,Bruce,Knight,41"],
//     ["57,Bob,Fry Cook,19"],
//     ["63,Blaine,Quiz Master,58"],
//     ["98,Bill,Doctor’s Assistant,26"]
// ]

// const columns = csvArray2[0]

let csvStr = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

let numCol;

let csvArray = [
    ["ID,Name,Occupation,Age"],
    [
        ["42,Bruce,Knight,41"],
        ["57,Bob,Fry Cook,19"],
        ["63,Blaine,Quiz Master,58"],
        ["98,Bill,Doctor’s Assistant,26"],
    ]
]

console.log(csvArray)

// Part 3: Transforming Data

const rows = [
    {
        id: "42",
        name: "Bruce",
        occupation: "Knight",
        age: "41"
    },
    {
        id: "57",
        name: "Bob",
        occupation: "Fry Cook",
        age: "19"
    },
    {
        id: "63",
        name: "Blaine",
        occupation: "Quiz Master",
        age: "58"  
    },
    {
        id: "98",
        name: "Bill",
        occupation: "Doctor's Assistant",
        age: "26"
    }
]

console.log(rows)

// Part 4: Sorting and Manipulating Data
// 1.
rows.pop(1)
console.log(rows)

// 2.
rows.splice(1,0, {id: "48", name: "Barry", occupation: "Runner", age: "25"})
console.log(rows)

// 3. 
rows.push({id: "7", name: "Bilbo", occupation: "None", age: "111"})
console.log(rows)

// average age
const ageArray = [41, 25, 19, 58, 111];

const length = ageArray.length;

for(let i = 0; i < length; i++) {
    ageArray[i] = ageArray / ageArray.length ;
}
console.log(ageArray)

// This was difficult, I could not understand how to find the average age

// function average(ageArray) {
//     let sum = 0;
//     for(let i = 0; i < ageArray.length; i++) {
//         sum += ageArray[i];
//     }
//     return sum / ageArray.length;
// }
