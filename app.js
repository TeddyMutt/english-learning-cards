let progress =
    JSON.parse(
        localStorage.getItem("progress")
    ) || {};

let currentWord = null;

function newCard() {

    let weightedWords = [];

    words.forEach(word => {

        const status =
            progress[word.english];

        if (status === "practice") {

            for (let i = 0; i < 6; i++) {
                weightedWords.push(word);
            }

        } else if (status === "learning") {

            for (let i = 0; i < 3; i++) {
                weightedWords.push(word);
            }

        } else if (status === "good") {

            weightedWords.push(word);

        } else {

            for (let i = 0; i < 2; i++) {
                weightedWords.push(word);
            }

        }

    });

    currentWord =
        weightedWords[
            Math.floor(
                Math.random() *
                weightedWords.length
            )
        ];

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

    document
        .getElementById("cardInner")
        .classList.remove("flipped");

    updateCardColour();

}

function flipCard() {

    document
        .getElementById("cardInner")
        .classList.toggle("flipped");

}

function markGood() {

    progress[currentWord.english] = "good";

    saveProgress();

    newCard();

}

function markLearning() {

    progress[currentWord.english] = "learning";

    saveProgress();

    newCard();

}

function markPractice() {

    progress[currentWord.english] = "practice";

    saveProgress();

    newCard();

}

function saveProgress() {

    localStorage.setItem(
        "progress",
        JSON.stringify(progress)
    );

    updateProgress();

}

function updateProgress() {

    let good = 0;
    let learning = 0;
    let practice = 0;

    words.forEach(word => {

        const status =
            progress[word.english];

        if (status === "good")
            good++;

        if (status === "learning")
            learning++;

        if (status === "practice")
            practice++;

    });

    const tested =
        good + learning + practice;

    const percentage =
        Math.round(
            (good / words.length) * 100
        );

    document.getElementById(
        "progress"
    ).innerHTML =

        `
        🟢 Good: ${good}<br>
        🟡 Learning: ${learning}<br>
        🔴 Needs Practice: ${practice}<br>
        ⚪ Untested: ${words.length - tested}<br><br>
        Progress: ${percentage}%
        `;

}

function updateCardColour() {

    const card =
        document.querySelector(".card-front");

    card.classList.remove(
        "good",
        "learning",
        "practice",
        "untested"
    );

    const status =
        progress[currentWord.english];

    if (status === "good") {

        card.classList.add("good");

    } else if (status === "learning") {

        card.classList.add("learning");

    } else if (status === "practice") {

        card.classList.add("practice");

    } else {

        card.classList.add("untested");

    }

}

function resetProgress() {

    if (
        confirm(
            "Reset all progress?"
        )
    ) {

        localStorage.removeItem(
            "progress"
        );

        progress = {};

        updateProgress();

        newCard();

    }

}

window.onload = function () {

    updateProgress();

    newCard();

};
