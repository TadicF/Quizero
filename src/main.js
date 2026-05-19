import "./styles.css"
import "./styles/main.css"
import "./styles/customQuestions.css"
import "./styles/defaultQuestions.css"
import { QuizData } from "./modules/quizData.js"
import { domController } from "./modules/domController.js";

const btn = document.querySelector(".customQuestions").addEventListener("click", () => {
    window.location.href = "./pages/customQuestions.html"
})

export const quiz = new QuizData();


