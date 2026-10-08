let activeWords = [];
let currentWord = null;

function setCategory(category) {

    if (category === "all") {

        activeWords = [
            ...categories.people,
            ...categories.actions,
            ...categories.places,
            ...categories.questions,
            ...categories.describing,
            ...categories.grammar
        ];

    } else {

        activeWords = categories[category];

    }

    newCard();
}

function newCard() {

    currentWord =
        activeWords[Math.floor(Math.random() * activeWords.length)];

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

window.onload = function () {

    setCategory("all");

};
