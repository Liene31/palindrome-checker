const checkBtn = document.getElementById("check-btn");
const inputValue = document.getElementById("input-value");
const answerField = document.getElementById("answer-field");

function isPalindrome(word) {
  const phrase = word.replace(/\s+/g, "").toLowerCase();
  const reversedPhrase = phrase.split("").reverse().join("");
  return phrase === reversedPhrase;
}

function displayPalindromeResult(word) {
  const para = document.createElement("p");
  const span = document.createElement("span");
  const result = isPalindrome(word);
  document.getElementById("answer-field").textContent = "";
  span.className = "text-highlight";
  span.textContent = `'${word}'`;

  result ? (para.textContent = "Yes, ") : (para.textContent = "No, ");
  para.appendChild(span);
  result
    ? para.append(" is a palindrome!")
    : para.append(" isn't a palindrome!");

  document.getElementById("answer-field").append(para);
}

checkBtn.addEventListener("click", () => {
  const phrase = inputValue.value;
  displayPalindromeResult(phrase);
  inputValue.value = "";
});
