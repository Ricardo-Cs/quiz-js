import { quizData } from "./questoes.js";

const quizQuestion = document.querySelector(".quiz-question h2");
const quizOptions = document.querySelectorAll(".quiz-options span");
const urlParams = new URLSearchParams(window.location.search);
const quizParams = urlParams.get("quiz");
let currentQuestion = 0;
// currentQuestion = window.localStorage.getItem("currentQuestion");

const nextQuestion = () => {
    if(loadQuestion()) {
        currentQuestion++;
        window.localStorage.setItem("currentQuestion", currentQuestion);
        loadQuestion();
    }
}


const loadOptions = (quizOptions, quizData, type) => {
    quizOptions.forEach((option, index) => {
      option.innerHTML = quizData[type][currentQuestion].options[index];
    });
};
  
for(let i = 0; i < quizOptions.length; i++) {
    quizOptions[i].addEventListener('click', nextQuestion);
}

function loadQuestion() {
    if (quizParams === "1") {
        quizQuestion.innerHTML = quizData.programming[currentQuestion].question;
        loadOptions(quizOptions, quizData, "programming");
        return true;
    }
      

    if (quizParams === "2") {
        quizQuestion.innerHTML = quizData.conhecimentos[currentQuestion].question;
        loadOptions(quizOptions, quizData, "conhecimentos");
        return true;
    } 

    if (quizParams === "3") {
        quizQuestion.innerHTML = quizData.games[currentQuestion].question;
        loadOptions(quizOptions, quizData, "games");
        return true;
    } 

    if (quizParams === "4") {
        quizQuestion.innerHTML = quizData.science[currentQuestion].question;
        loadOptions(quizOptions, quizData, "science");
        return true;
    } 

    return false;

}
loadQuestion();


