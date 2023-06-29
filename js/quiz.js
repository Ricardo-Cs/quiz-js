import { quizData } from "./questoes.js";

const quizQuestion = document.querySelector(".quiz-question h2");
const quizOptions = document.querySelectorAll(".quiz-options span");
const urlParams = new URLSearchParams(window.location.search);
const quizParams = urlParams.get("quiz");

const nextQuestion = () => {
    currentQuestion++;
    window.localStorage.setItem("currentQuestion", currentQuestion);
    loadQuestion();
}

const loadOptions = (quizOptions, quizData, type) => {
    quizOptions.forEach((option, index) => {
      option.innerHTML = quizData[type][currentQuestion].options[index];
    });
  };
  

let currentQuestion = 0;
let setLocalStorage = window.localStorage.getItem("currentQuestion");

function loadQuestion() {
    if (quizParams === "1") {
        quizQuestion.innerHTML = quizData.programming[currentQuestion].question;
        loadOptions(quizOptions, quizData, "programming");
        return;
    }
      

    if (quizParams === "2") {
        quizQuestion.innerHTML = quizData.conhecimentos[currentQuestion].question;
        loadOptions(quizOptions, quizData, "conhecimentos");
        return;
    } 

    if (quizParams === "3") {
        quizQuestion.innerHTML = quizData.games[currentQuestion].question;
        loadOptions(quizOptions, quizData, "games");
        return;
    } 

    if (quizParams === "4") {
        quizQuestion.innerHTML = quizData.science[currentQuestion].question;
        loadOptions(quizOptions, quizData, "science");
        return;
    } 

}

loadQuestion();

quizOptions[0].addEventListener('click', nextQuestion);
quizOptions[1].addEventListener('click', nextQuestion);
quizOptions[2].addEventListener('click', nextQuestion);
quizOptions[3].addEventListener('click', nextQuestion);

