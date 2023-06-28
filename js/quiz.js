import { quizData } from "./questoes.js";

const quizQuestion = document.querySelector(".quiz-question h2");
const urlParams = new URLSearchParams(window.location.search);
const quizParams = urlParams.get("quiz");

// if(quizParams === "1") {
//     quizQuestion.innerHTML = quizData.programming[0].question;
// }
