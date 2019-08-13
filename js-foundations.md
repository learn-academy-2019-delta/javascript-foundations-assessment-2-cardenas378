# ASSESSMENT 2: FOUNDATIONS OF JAVASCRIPT
## Interview Practice Questions

### From memory, answer the following:

1. What's the difference between =, ==, and === in JavaScript?
  = just assigns a value to something 
  == checks if is equal to another item but is flexible 
  === also check if something is equal to another item but is very strict 



2. What is the difference between an array's index and length?
  An array index is simply the location of an item inside the array.
  The array length is a property used to find how many items are insde the array.



3. What is a function's declaration, argument, and call? 
  A functions declaration simply defines a named function.
  The argument is a value that is passed to the function when it is called.
  A call is what we use to call the function so it runs.



4. What are the three main steps in saving work to github?
  git add .
  git commit -m "name"
  git push 


5. What is an object?
  The marriage between data and behavior  


### Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

Consider the function:

var text = 'outside'
function logIt(){
  console.log(text)
  var text = 'inside'
}
logIt()


1a. Look at this Javascript function and try to predict what the console show. 

  I am not sure it would return anything. 



1b. Test the function. Explain why the function returned what it did.

  Your answer: I dont think the function was called properly.

  Researched answer: The reason the code is undefined is due to "variable hosting".
    To make the code behave as expected you have to either assign the variable within the function scope 
     or pass it as an argument to the function. 


2. What is JSON? How does it relate to javascript objects?

  Your answer: JSON is a language that APIs read.

  Researched answer: Is a lightweight data interchange format. It is easy for humans to read and 
    write, and easy for machines to arse and generate.


3. What does CRUD stand for?

     Your answer: Create, Read, Update & Destroy 

  Researched answer:
  
      Create, Read, Update & Delete



4. What is a higher-order function?

  Your answer: a function that takes in another function 

  Researched answer:High order functions are functions that take other functions as arguments
    or return functions as their results.


5. Stretch: What is a closure, what is it good for and how do you recognize one?

  Your answer: N/A

  Researched answer:


6. Stretch: What is an API?

  Your answer: something that websites read in JSON

  Researched answer: Application Programming Interface, which allows applications to communicate with one another.An api isnt a database or even a 
    server, it is the code that governs the access point(s) for the server. 


### Additional Feedback Questions.

1. Do you have a suggestion for a Check In question?



2. What was your favorite topic this week?
  How the internet works 



3. What was your "A-ha!" moment this week?
  During the class/inheritance challanges my moment was when we figured out how to make the car   
    accelerate and brake
  
