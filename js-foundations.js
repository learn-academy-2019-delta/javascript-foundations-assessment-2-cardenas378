// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write an arrow function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".


// var divBy3 = (num) => {
//     if (num%3 ===0){
//         return num + " is divisible by 3"
//     }else {
//         return num + " is not divisible by 3"
//     }
// }
// console.log(divBy3(-7))


// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.


// var helloMe = {
//     firstName: "Juan",
//     lastName: "Cardenas",
//     phone: "619123456", 
//     age: 28,
//     getData: function() {
//         return "Hello my name is " + this.firstName + " " + this.lastName + " my phone number is: " + this.phone + ", and my age is " + this.age + "."
        
//     }
    
// }

// console.log(helloMe.getData())



// -------------------------------------------------
// Consider the variable:

// var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item as one string. Expected output: "streetlamp teeth nephew database"


// function everyOther(arr){
//     let newArr = []
//     for (let i = 0; i <arr.length; i +=2 ){
//         newArr.push(arr[i])
//     }
    
//             return newArr.join(" ")
// }
// console.log(everyOther(randomNouns))

        
            

// 3b. Create an arrow function that takes in the variable and returns an array with the number of letters in each string. Expected output: [10, 6, 5, 10, 6, 11, 8]


// let  length = (array) => {
//     return array.map(value => value.length)
// }
// console.log(length(randomNouns))


// 3c. Stretch: Create a function called capitalizer that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]



// -------------------------------------------------
// Consider the variables:
// var testString1 = "learn"
// var testString2 = "academy"
// var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"

// function alphabetSoup (str){
//     return str.split("").sort().join("");
// }

// console.log(alphabetSoup(testString1))
// console.log(alphabetSoup(testString2))
// console.log(alphabetSoup(testString3))

// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

// function alphabetSoup (str,aaa,bbb){
//     return str.split("").sort().join(""), 
// }

// console.log(alphabetSoup(testString1))

// -------------------------------------------------
// Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"

function merge (amounts, animals) {
    let a = amounts.filter(Boolean);
    let b = animals
    let mergedString = " "
    
        for (let i = 0; i < a.length || i < b.length; i++){
            if(i < a.length)
                mergedString += a[i] + " ";
            if(i < b.length)
                mergedString += b[i] + " "
        }
        return mergedString
}

console.log(merge(amounts,animals))







// 5b. Stretch: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"

