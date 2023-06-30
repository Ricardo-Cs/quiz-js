import { quizData } from "./questoes.js";

const quizQuestion = document.querySelector(".quiz-question h2");
const quizOptions = document.querySelectorAll(".quiz-options span");
const urlParams = new URLSearchParams(window.location.search);
const quizParams = urlParams.get("quiz");
let correct = 0;
let wrong = 0
let currentQuestion = 0;

const checkAnswer = (selectedOption) => {
    const correctAnswer = getCorrectAnswer();
  
    if (selectedOption.textContent == correctAnswer) {
      selectedOption.classList.add("correct");
      correct++;
      setTimeout(() => {
        selectedOption.classList.remove("correct");
      }, 1500);
    } else {
      selectedOption.classList.add("incorrect");
      wrong++
      setTimeout(() => {
        selectedOption.classList.remove("incorrect");
      }, 1500);
    }
  };

const getCorrectAnswer = () => {
    if (quizParams === "1") {
      return quizData.programming[currentQuestion].answer;
    } else if (quizParams === "2") {
      return quizData.conhecimentos[currentQuestion].answer;
    } else if (quizParams === "3") {
      return quizData.games[currentQuestion].answer;
    } else if (quizParams === "4") {
      return quizData.science[currentQuestion].answer;
    }
  
    return null;
};
    
const nextQuestion = () => {
    if (loadQuestion()) {
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

const enableOptionClick = () => {
    quizOptions.forEach((option) => {
      option.addEventListener("click", optionClickHandler);
    });
};
  
const optionClickHandler = (event) => {
    const selectedOption = event.target;
    checkAnswer(selectedOption);
  
    // Desabilitar cliques nas opções após o primeiro clique
    quizOptions.forEach((option) => {
      option.removeEventListener("click", optionClickHandler);
    });
  
    setTimeout(() => {
        nextQuestion();
        enableOptionClick();
        // Habilitar novamente o clique nas opções
      }, 1500);
};

const mostResults = () => {
    alert(`Você acertou ${correct} questões!`)
}


for(let i = 0; i < quizOptions.length; i++) {
    quizOptions[i].addEventListener('click', optionClickHandler);
}

function loadQuestion() {
    if (quizParams === "1") {
        if(quizData.programming[currentQuestion]) {
            quizQuestion.innerHTML = quizData.programming[currentQuestion].question;
            loadOptions(quizOptions, quizData, "programming");
            return true;
        } else {
            return mostResults();
        }
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
