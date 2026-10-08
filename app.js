
let currentWord = null;

function newCard() {

currentWord =
words[Math.floor(Math.random() * words.length)];

document.getElementById("english").textContent =
currentWord.english;

document.getElementById("traditional").textContent =
currentWord.traditional;

document.getElementById("pinyin").textContent =
currentWord.pinyin;

document.getElementById("exampleEnglish").textContent =
currentWord.example.english;

document.getElementById("exampleChinese").textContent =
currentWord.example.traditional;

document.getElementById("examplePinyin").textContent =
currentWord.example.pinyin;

document.getElementById("cardInner")
.classList.remove("flipped");
}

function flipCard() {
document.getElementById("cardInner")
.classList.toggle("flipped");
}

window.onload = function() {
newCard();
};
