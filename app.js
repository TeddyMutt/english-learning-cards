let currentWord = null;

function newCard() {


currentWord = words[Math.floor(Math.random() * words.length)];

document.getElementById("wordCount").innerText =
    "Words loaded: " + words.length;

    document.getElementById("english").innerText =
        currentWord.english;

    document.getElementById("traditional").innerText =
        currentWord.traditional;

    document.getElementById("pinyin").innerText =
        currentWord.pinyin;

    document.getElementById("exampleEnglish").innerText =
        currentWord.example.english;

    document.getElementById("exampleChinese").innerText =
        currentWord.example.traditional;

    document.getElementById("examplePinyin").innerText =
        currentWord.example.pinyin;

    document.getElementById("cardInner")
        .classList.remove("flipped");
}

function flipCard() {

    document.getElementById("cardInner")
        .classList.toggle("flipped");

}

newCard();
