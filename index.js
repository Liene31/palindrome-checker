const checkBtn = document.getElementById("check-btn");
const inputField = document.getElementById("input-field");
const answerField = document.getElementById("answer-field");
checkBtn.disabled = true;

//Listens for the input
//Toggles Btn true/false depending on if there is an input or not
inputField.addEventListener("input", function () {
  inputField.value.trim() === ""
    ? (checkBtn.disabled = true)
    : (checkBtn.disabled = false);
});

function isPalindrome(word) {
  const phrase = word.replace(/\s+/g, "").toLowerCase();
  const reversedPhrase = phrase.split("").reverse().join("");
  return phrase === reversedPhrase;
}

function displayPalindromeResult(word) {
  const para = document.createElement("p");
  const span = document.createElement("span");
  const result = isPalindrome(word);
  answerField.textContent = "";
  span.className = "text-highlight";
  span.textContent = `'${word}'`;

  result ? (para.textContent = "Yes, ") : (para.textContent = "No, ");
  para.appendChild(span);
  result
    ? para.append(" is a palindrome!")
    : para.append(" isn't a palindrome!");

  answerField.append(para);
}

// Handles Btn click
checkBtn.addEventListener("click", () => {
  displayPalindromeResult(inputField.value);
  inputField.value = "";
  checkBtn.disabled = true;
});
