import { quizData } from "./questoes.js";

const quizQuestion = document.querySelector(".quiz-question h2");
quizQuestion.innerHTML = quizData.programming[0].question;