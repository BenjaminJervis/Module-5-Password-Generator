// Array of special characters to be included in password
/*var specialChar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericChar = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerChar = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperChar = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];*/

//These are the variables I have created using the given arrays above 

var lowerCharArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperCharArr =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericCharArr = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharArr = ["!","$","^","&","*","-",",","=","+","_","?"]

//I have created a new variable here as an empty array to store the choices the user inputs to make a new user password 
var newUserPassword = [];

//---User choices - This section gives the user different options to choose a password ---//

//User choices - This allows the user to chose different options using prompts and if statements

//Global scope variable used here 
// I have used parseInt to parse a string and return a interger 

// Function to prompt user for password options

var passWordLength;

function getPasswordOptions() {
passWordLength =  parseInt(prompt("Please choose a password between 10 and 64 characters long"));

 
        
    //If statement used to make sure the password is not less than 10 characters and greater than 64 characters 
     if (passWordLength < 10 || passWordLength >64 ) {
      alert ("please choose between 10 and 64 characters")
      return null; 
       }
    var upperChar = confirm ("Please click ok to add a upper case letter."); 
    var lowerChar = confirm ("Please click ok to add a lower case letter."); 
    var numericChar = confirm ("Please click ok to add number between 0-9"); 
    var specialChar = confirm ("Please click ok to add a special character"); 
    
//Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above 

    if (upperChar === true) {   
        (newUserPassword = newUserPassword.concat(upperCharArr)); //Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above
     }
      if (lowerChar === true) {
         (newUserPassword = newUserPassword.concat(lowerCharArr)); //Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above
      }
     if (numericChar === true) {
         (newUserPassword = newUserPassword.concat(numericCharArr));
      }
     if (specialChar = true) {
         (newUserPassword = newUserPassword.concat(specialCharArr));
      }
console.log (newUserPassword)

//Function to get the password options 


var newPassWordstring = newUserPassword.join(""); //I have used .join to join all the characters entered above by the user together
console.log(passWordLength)     
//var newUserPassword = ""; //I have used the password variable as a blank string 
console.log(passWordLength)
for (var i = 0; i < passWordLength; i++) { //This runs a for loop and adds one to the password length each time.
  var genericChar = newPassWordstring.charAt(Math.floor(Math.random() * newPassWordstring.length)); //for loop used to get a random charcter from the above arrays 
  newUserPassword = password.concat(genericChar); //here I have used .concat method to concatenate the characters entered by the user together 
}
console.log(passWordLength) //prints the password length
}
// Function to generate password with user input
function generatePassword() {
 alert ("click generate password button below to receive your new password"); //This alert reminds the user to click the button to view their password 
 document.getElementById("passwordText").textContent = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
   newUserPassword = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// console.log(password);
// console.log(passWordLength);
// console.log(upperChar);
// console.log(lowerChar);
// console.log(numericChar);
// console.log(specialChar);
// console.log(newPassWord);
// console.log(newPassWordstring);
// console.log(genericChar);
getPasswordOptions()