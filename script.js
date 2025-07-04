let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const resultContainer = document.getElementById('resultContainer');
const finalScoreEl = document.getElementById('finalScore');
const detailedResultsEl = document.getElementById('detailedResults');
const passFailEl = document.getElementById("passFail");

function nextQuestion() {
    questions[currentQuestion].classList.remove('active');
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questions[currentQuestion].classList.add('active');
    }
}

function gradeQuiz() {
    let score = 0;
    let results = [];

    //multiple choice question
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1?.value === "a") {
        score++;
        results.push("1. Correct! HTTP helps transfer hypertext documents over the internet.");
    } else {
        results.push("1. Incorrect. HTTP helps transfer hypertext documents over the internet.");
    }

    //multiple choice question
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2?.value === "c") {
        score++;
        results.push("2. Correct! HTTP 0.9 was the first version of HTTP.");
    } else {
        results.push("2. Incorrect. HTTP 0.9 was the first version of HTTP.");
    }

    //multiple choice question
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3?.value === "a") {
        score++;
        results.push("3. Correct! HTTP messages consist of a request and response cycle.");
    } else {
        results.push("3. Incorrect. HTTP messages consist of a request and response cycle.");
    }

    //multiple choice question
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4?.value === "b") {
        score++;
        results.push("4. Correct! An HTTP message is sent by a client to a server.");
    } else {
        results.push("4. Incorrect. An HTTP message is sent by a client to a server.");
    }

    //fill-in-the-blank question
    const q5 = document.querySelector('input[name="q5"]').value.trim().toLowerCase();
    if (q5 === "hypertext transfer protocol") {
        score++;
        results.push("5.Correct! HTTP stands for Hypertext Transfer Protocol.");
    } else {
        results.push("5. Incorrect. HTTP stands for Hypertext Transfer Protocol.");
    }

    //multiple choice question
    const q6 = document.querySelector('input[name="q6"]:checked');
    if (q6?.value === "d") {
        score++;
        results.push("6. Correct! HTTP/3.0 is the most recent version of HTTP");
    } else {
        results.push("6. Incorrect. HTTP/3.0 is the most recent version of HTTP.");
    }

    //multiple-correct question
    const selected = Array.from(document.querySelectorAll('input[name="q7"]:checked')).map(cb => cb.value).sort();
    const correctAnswers = ["Header", "URL", "Request body"];
    if (arraysEqual(selected.sort(), correctAnswers)) {
        score++;
        results.push("7. Correct! Headers, URL, and request bodies are all part of an HTTP message.");
    } else {
        results.push("7. Incorrect. Headers, URL, and request bodies are parts of an HTTP message.");
    }


    //show results
    document.getElementById("quiz-form").style.display = "none";
    finalScoreEl.textContent = `You scored ${score} out of 7!`;
    detailedResultsEl.innerHTML = results.map(r => `<li>${r}</li>`).join("");
    passFailEl.textContent = score >= 5 ? "You passed!" : "You failed.";
    resultContainer.classList.remove("hidden");
}

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

function restartQuiz() {
    document.getElementById("quiz-form").reset();

    resultContainer.classList.add("hidden");
    document.getElementById("quiz-form").style.display = "block";

    questions.forEach(q => q.classList.remove("active"));
    currentQuestion = 0;
    questions[0].classList.add("active");
}