const playerName = document.querySelector("[player-name]");
const startQuizButton = document.querySelectorAll(".start-quiz");
const startQuizDiv = document.querySelectorAll(".quiz");

playerName.innerHTML = localStorage.getItem("player");

const startQuiz = (quizNumber) => {
    window.location = `./quiz.html?=${quizNumber}`;
};

startQuizButton[0].addEventListener('click', () => startQuiz(1));
startQuizDiv[0].addEventListener('click', () => startQuiz(1));

startQuizButton[1].addEventListener('click', () => startQuiz(2));
startQuizDiv[1].addEventListener('click', () => startQuiz(2));

startQuizButton[2].addEventListener('click', () => startQuiz(3));
startQuizDiv[2].addEventListener('click', () => startQuiz(3));

startQuizButton[3].addEventListener('click', () => startQuiz(4));
startQuizDiv[3].addEventListener('click', () => startQuiz(4));