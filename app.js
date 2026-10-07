const words = [
{
    english: "I",
    traditional: "我",
    pinyin: "wǒ",
    example: {
        english: "I am here.",
        traditional: "我在這裡。",
        pinyin: "Wǒ zài zhèlǐ."
    }
},
{
    english: "you",
    traditional: "你",
    pinyin: "nǐ",
    example: {
        english: "You are here.",
        traditional: "你在這裡。",
        pinyin: "Nǐ zài zhèlǐ."
    }
}
];

let currentWord;

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
}

function flipCard() {
    document.getElementById("cardInner")
        .classList.toggle("flipped");
}

window.onload = newCard;
