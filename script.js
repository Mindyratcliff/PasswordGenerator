// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Create function to generate a password

function generatePassword() {
  // Ask the user for information about the desired password

  var passwordLength = prompt(
    "How many characters do you want your password to be?"
  );

  //Parse out numerical value

  passwordLength = parseInt(passwordLength);

  //Provide conditions for possible NaN entries vs numerical entries

  if(passwordLength<128 && passwordLength<8){
    alert("Your password must be between 8-128 characters.");
  }

  if (isNaN(passwordLength)) {
    alert("Your password length must be a numerical value.")
  }

  else{
    //Accept user criteria for password
  var confirmUppercase = confirm("Do you want uppercase letters?");
  var confirmLowercase = confirm("Do you want lowercase letters?");
  var confirmNumbers = confirm(
    "Do you want to include numbers in your password?"
  );
  var confirmSpecial = confirm(
    "Do you want to include special characters in your password?"
  );

  
    //Provide possible characters for password

    var characters = [
      [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      ["!", "@", "#", "$", "%", "^", "&", "*"],
    ];

  //Create a function to find random characters from the possible characters

  function randomCharacters(possibleChar) {
    var generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword =
        generatedPassword +
        possibleChar[Math.floor(Math.random() * possibleChar.length)];
    }
    return generatedPassword;
  }

  //User does not confirm any criteria

  if (
    confirmUppercase === false &&
    confirmLowercase === false &&
    confirmNumbers === false &&
    confirmSpecial === false
  ) {
    alert("You need to pick something to make a password!");
  }

  //Create an empty array to accept characters from user selections

  var createsPass = [];

  //If user wants uppercase letters
  if (confirmUppercase === true) {
    //Concat uppercase letters within array

    createsPass = createsPass.concat(characters[0]);
  }

  //If user wants lowercase letters
  if (confirmLowercase === true) {
    //Concat lowercase letters within array

    createsPass = createsPass.concat(characters[1]);
  }

  //If user wants numbers
  if (confirmNumbers === true) {
    //Concat numbers within array

    createsPass = createsPass.concat(characters[2]);
  }

  //If user wants specials
  if (confirmSpecial === true) {
    //Concat special characters within array

    createsPass = createsPass.concat(characters[3]);
  }

  //Run random character functions to mix up gathered array

  generatedPassword = randomCharacters(createsPass);

  //Return the generated password to the function writePassword

  return generatedPassword;
}
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
