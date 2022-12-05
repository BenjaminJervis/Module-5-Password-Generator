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

//These are my variables created using the given arrays above 

var lowerChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var upperChar =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numericChar = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","$","^","&","*","-",",","=","+","_","?"]

//Variable created as an array to store the choices the user inputs 
var userPassword = [];

var password = "";


// Function to prompt user for password options
function getPasswordOptions() {
  //passwordLength = prompt ("please enter the length of your required password");
  //lowerCasedCharacters = prompt ("please enter a lower case letter");
  //upperCasedCharacters = prompt ("please enter a upper case letter");
  //numericCharacters = prompt("please enter a number 1-9");
  //specialCharacters = prompt("please enter a special character")


}

getPasswordOptions()

// write code to limit password length between 10-64 chars

//create a variable here that stores user input from above arrays 
// use the user input 


// Function for getting a random element from an array
function getRandom(specialCharacters) {
  for (i = 0; i < length; i++) 
    var currentOption = options[Math.floor(Math.random() * options.length)];
    var randomChar = currentOption.charAt(Math.floor(Math.random() * currentOption.length));
    password += randomChar;
    passwordArray.push(randomChar);

}
getRandom()



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