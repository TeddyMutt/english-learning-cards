let progress =
    JSON.parse(localStorage.getItem("progress")) || {};

let currentWord = null;

function newCard() {

    let weightedWords = [];

    words.forEach(word => {

        let status = progress[word.english];

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
            Math.floor(Math.random() * weightedWords.length)
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

    document.getElementById("cardInner")
        .classList.remove("flipped");

    updateCardColour();
}

function flipCard() {

    document.getElementById("cardInner")
        .classList.toggle("flipped");
}

function markGood() {

    progress[currentWord.english] = "good";

    saveProgress();

    updateCardColour();

    setTimeout(newCard, 500);
}

function markLearning() {

    progress[currentWord.english] = "learning";

    saveProgress();

    updateCardColour();

    setTimeout(newCard, 500);
}

function markPractice() {

    progress[currentWord.english] = "practice";

    saveProgress();

    updateCardColour();

    setTimeout(newCard, 500);
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

        let status =
            progress[word.english];

        if (status === "good")
            good++;

        if (status === "learning")
            learning++;

        if (status === "practice")
            practice++;

    });

    let tested =
        good + learning + practice;

    let untested =
        words.length - tested;

    let percentage =
        Math.round(
            (good / words.length) * 100
        );

    document.getElementById("progress")
        .innerHTML =
        `
        🟢 Good: ${good}<br>
        🟡 Learning: ${learning}<br>
        🔴 Needs Practice: ${practice}<br>
        ⚪ Untested: ${untested}<br><br>
        Overall Progress: ${percentage}%
        `;
}

function updateCardColour() {

    let front =
        document.querySelector(".card-front");

    front.classList.remove(
        "good",
        "learning",
        "practice",
        "untested"
    );

    let status =
        progress[currentWord.english];

    if (status === "good") {

        front.classList.add("good");

    } else if (status === "learning") {

        front.classList.add("learning");

    } else if (status === "practice") {

        front.classList.add("practice");

    } else {

        front.classList.add("untested");

    }
}

function resetProgress() {

    if (confirm("Reset all progress?")) {

        localStorage.removeItem("progress");

        progress = {};

        updateProgress();

        newCard();
    }
}

window.onload = function () {

    updateProgress();

    newCard();
};
