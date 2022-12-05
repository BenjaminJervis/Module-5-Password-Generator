// Array of special characters to be included in password
var specialCharacters = [
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
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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
var upperCasedCharacters = [
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

//Variable created as an empty array to store the choices the user inputs 
var newUserPassword = [];

//---User options - This section gives the user different options ---//

//User choices - This allows the user to chose different options using prompts, if statements and confirms 


// Function to prompt user for password options

function getPasswordOptions() {
 
    var passWordlength =  parseInt(prompt("Please choose a password between 10 and 64 characters")); // I have used parseInt to parse a string and return a interger 
        
    //If statement used to make sure the password is not less than 10 characters 
     if (passWordlength > 10 ); {
        
        prompt("How many characters do you want to be in your password? Choose between 10-64 characters");
    
       }
    upperChar = prompt("Please choose a upper case letter."); 
    lowerChar = prompt("Please choose a lower case letter."); 
    numericChar = prompt("Please choose a number between 0-9"); 
    specialChar = prompt("Please choose a special character"); 
    
//Here I have used a condition. I have used an If statement to say if the user enters correctly then add value to new password variable 

    if (upperChar === true) {  // Here I have used the .push method to push all user choices to the new password variable 
        (newUserPassword.push(upper));
     }
      if (lowerChar === true) {
         (newUserPassword.push(lower));
      }
     if (numericChar === true) {
         (newUserPassword.push(numeric));
      }
     if (specialChar = true) {
         (newUserPassword.push(special));
      }
     


}

var newPassWordstring = newUserPassword.join(""); //I have used .join to join all the characters entered together
      
var password = "";

getPasswordOptions()

// write code to limit password length between 10-64 chars

//create a variable here that stores user input from above arrays 
// use the user input 


// Function for getting a random element from an array






// Function to generate password with user input
function generatePassword() {
  
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