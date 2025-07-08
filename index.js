//button is non-active (different color, without pointer)
//Only when text added, it becomes active(color + pointer)

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

checkBtn.addEventListener("click", () => {
  const para = document.createElement("p");
  const span = document.createElement("span");
  const phrase = inputValue.value;

  span.className = "text-highlight";
  span.textContent = `'${phrase}'`;
  para.textContent = "Yes, ";
  para.appendChild(span);
  para.append(" is a palindrome!");
  document.getElementById("answer-field").append(para);
  console.log(isPalindrome(phrase));
});
