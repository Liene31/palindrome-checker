const checkBtn = document.getElementById("check-btn");
const inputValue = document.getElementById("input-value");
const answerField = document.getElementById("answer-field");

function isPalindrome(word) {
  const phrase = word.replace(/\s+/g, "").toLowerCase();
  let reversedPhrase = "";
  for (let i = phrase.length - 1; i >= 0; i--) {
    reversedPhrase += phrase[i];
  }

  return phrase === reversedPhrase;
}

function displayPalindromeResult(word) {
  const para = document.createElement("p");
  const span = document.createElement("span");
  document.getElementById("answer-field").textContent = "";
  span.className = "text-highlight";
  span.textContent = `'${word}'`;
  if (isPalindrome(word)) {
    para.textContent = "Yes, ";
  } else {
    para.textContent = "No, ";
  }

  para.appendChild(span);

  if (isPalindrome(word)) {
    para.append(" is a palindrome!");
  } else {
    para.append(" isn't a palindrome!");
  }

  document.getElementById("answer-field").append(para);
}

checkBtn.addEventListener("click", () => {
  const phrase = inputValue.value;
  displayPalindromeResult(phrase);
  inputValue.value = "";
});
