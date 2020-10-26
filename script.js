// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // Ask the user for information about the desired password
 
  var passwordLength = prompt(
    "How many characters do you want your password to be?"
  );
  var confirmUppercase = confirm("Do you want uppercase letters?");
  var confirmLowercase = confirm("Do you want lowercase letters?");
  var confirmNumbers = confirm(
    "Do you want to include numbers in your password?"
  );
  var confirmSpecial = confirm(
    "Do you want to include special characters in your password?"
  );

  //Convert prompt answer to Integers
  //Think about this

  passwordLength = parseInt(passwordLength);

  if (isNaN(passwordLength))

  //Provide possible characters for password

  var characters = {
    lowercase: [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z],
    uppercase: [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    specials: ["!", "@", "#", "$", "%", "^", "&", "*"]
    
  };

  //Create a function to find random characters from the characters 

  function randomCharacters(possibleChar, generatedPassword) {
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword =
        generatedPassword +
        possibleChar[Math.floor(Math.random() * possibleChar.length)];
    }
    return possibleChar;
  }

  //

  if (confirmUppercase === false &&
      confirmLowercase === false &&
      confirmNumbers === false &&
      confirmSpecial === false
    ) {
      //

      alert("You need to pick something to make a password!");
    }

    //If user wants uppercase letters
    if (confirmUppercase === true) {
      //Loop through uppercase letters only

      return possibleChar += randomCharacters(characters.uppercase);
    }

    //If user wants lowercase letters
    if (confirmLowercase === true) {
      //Loop through lowercase letters only

      return possibleChar += randomCharacters(characters.lowercase);
    }

    //If user wants numbers
    if (confirmNumbers === true) {
      //Loop through numbers list

      return possibleChar += randomCharacters(characters.numbers);
    }

    //If user wants specials
    if (confirmSpecial === true) {
      //Loop through special characters

      return possibleChar += randomCharacters(characters.specials);
    }
    
    for (var i = possibleChar.length; i < passwordLength; i++) {

      
    }

  //Return the generated password to the function writePassword

  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
