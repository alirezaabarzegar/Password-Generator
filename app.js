const rangeCharacters = document.getElementById("range-char");
const numberCharacters = document.getElementById("number-char");
const formContainer = document.querySelector("#password-form");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");
const uppercaseEl = document.querySelector("#uppercass");
const passwordDisplay = document.querySelector("#password-display");


const lowercaseCharCodes = arrayLowToHigh(97, 122);
const numberCharCodes = arrayLowToHigh(48, 57);
const symbolCharCodes = arrayLowToHigh(33, 47)
  .concat(58, 64)
  .concat(91, 96)
  .concat(123, 126);
const uppercaseCharCodes = arrayLowToHigh(65, 90);

// Synchronising range abd nubmer inputs
rangeCharacters.addEventListener("input", syncCharAmount);
numberCharacters.addEventListener("input", syncCharAmount);

function syncCharAmount(e) {
  const valueAmount = e.target.value;
  rangeCharacters.value = valueAmount;
  numberCharacters.value = valueAmount;
}

// Generating the password  when the form submitted
formContainer.addEventListener("submit", function (e) {
  e.preventDefault();

  const characterAmount = numberCharacters.value; //ok
  // const includeUppercase = uppercaseEl.value; wrong
  const includeUppercase = uppercaseEl.checked;
  const includeNumbers = numbersEl.checked;
  const includeSymbols = symbolsEl.checked;

  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );

  passwordDisplay.innerText = password;
});

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {

  let charCode = lowercaseCharCodes;
  if (includeNumbers) charCode = charCode.concat(numberCharCodes);
  if (includeSymbols) charCode = charCode.concat(symbolCharCodes);
  if (includeUppercase) charCode = charCode.concat(uppercaseCharCodes);

  const passwordCharacters = [];
  for (h = 0; h < characterAmount; h++) {
    let characterCodes = charCode[Math.floor(Math.random() * charCode.length)];
    passwordCharacters.push(String.fromCharCode(characterCodes));
  }


  return passwordCharacters.join("");
}

// Character Code Looping Function
function arrayLowToHigh(low, high) {
  let array = [];
  for (let i = low; i <= high; i++) {
    array.push(i);
  }
  return array;
}
