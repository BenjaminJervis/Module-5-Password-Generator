// Array of special characters to be included in password
var specialChar = [
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
];

//These are the variables I have created using the given arrays above 

var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperChar =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","$","^","&","*","-",",","=","+","_","?"]

//I have created a new variable here as an empty array to store the choices the user inputs to make a new password 
var newUserPassword = [];

//---User choices - This section gives the user different options to choose a password ---//

//User choices - This allows the user to chose different options using prompts and if statements


// Function to prompt user for password options

function getPasswordOptions() {
 
var passWordLength =  parseInt(prompt("Please choose a password between 10 and 64 characters")); // I have used parseInt to parse a string and return a interger 
        
    //If statement used to make sure the password is not less than 10 characters 
     if (passWordLength > 10 ); {
    
       }
    upperChar = prompt("Please choose a upper case letter."); 
    lowerChar = prompt("Please choose a lower case letter."); 
    numericChar = prompt("Please choose a number between 0-9"); 
    specialChar = prompt("Please choose a special character"); 
    
//Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above 

    if (upperChar === true) {   
        (newUserPassword.push(upperChar)); //Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above
     }
      if (lowerChar === true) {
         (newUserPassword.push(lowerChar)); //Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable above
      }
     if (numericChar === true) {
         (newUserPassword.push(numericChar));
      }
     if (specialChar = true) {
         (newUserPassword.push(specialChar));
      }

}

//Function to get the password options 
getPasswordOptions()

var newPassWordstring = newUserPassword.join(""); //I have used .join to join all the characters entered above by the user together
      
var newUserPassword = ""; //I have used the password variable as a blank string 

for (var i = 0; i < passWordLength; i++) { //This adds one to the password length each time the for loop runs 
  var genericChar = newPassWordstring.charAt(Math.floor(Math.random() * newPassWordstring.length)); //for loop used to get a random charcter from the above arrays 
  newUserPassword = password.concat(genericChar); //here I have used .concat method to concatenate the characters entered by the user together 

}

// Function to generate password with user input
function generatePassword() {
 alert ("click generate password button below to receive your new password"); //This reminds the user to click the button to view their password 
 document.getElementById("passwordText").textContent = password;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

console.log(password);
console.log(passWordLength);
console.log(upperChar);
console.log(lowerChar);
console.log(numericChar);
console.log(specialChar);
console.log(newPassWord);
console.log(newPassWordstring);
console.log(genericChar);