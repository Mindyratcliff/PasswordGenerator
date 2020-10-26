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
  var generatedPassword = "";
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

  passwordLength = parseInt(passwordLength);

  //Provide possible characters for password

  var characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "123456789",
    specials: "!@#$%^&*",
    all: function () {
      return this.lowercase + this.uppercase + this.numbers + this.specials;
    },
  };

  //Create a function to find random characters from the characters objects

  function randomCharacters(possibleChar) {
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword =
        generatedPassword +
        possibleChar[Math.floor(Math.random() * possibleChar.length)];
    }
  }

  //Confirm the prompt answer is between 8 and 128, and confirm user asks for password criteria.

  if (passwordLength >= 8 && passwordLength <= 128) {
    if (
      confirmUppercase === true &&
      confirmLowercase === true &&
      confirmNumbers === true &&
      confirmSpecial === true
    ) {
      // Loop through all possible letters, numbers, and special characters

      randomCharacters(characters.all());
    }

    //If user wants uppercase letters
    else if (confirmUppercase === true) {
      //Loop through uppercase letters only

      var ups = randomCharacters(characters.uppercase);
    }

    //If user wants lowercase letters
    else if (confirmLowercase === true) {
      //Loop through lowercase letters only

      var lows = randomCharacters(characters.lowercase);
    }

    //If user wants numbers
    else if (confirmNumbers === true) {
      //Loop through numbers list

      var nums = randomCharacters(characters.numbers);
    }

    //If user wants specials
    else if (confirmSpecial === true) {
      //Loop through special characters

      var spec = randomCharacters(characters.specials);
    }
    var concPassword 
    
    if (ups === NaN || lows === NaN || nums === NaN || spec === NaN) {
        
    }

    (ups + lows + nums + spec); 
        for (var j = 0; j < concPassword; j++) {
            concPassword[Math.floor(Math.random) * concPassword.length]
        };
        generatedPassword = generatedPassword + concPassword;
  }

  //Return an alert that asks the user to meet password criteria
  else {
    alert("Your password must be between 8 and 128 characters.");
  }

  //Return the generated password to the function writePassword

  return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
