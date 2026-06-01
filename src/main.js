import "./styles.css"
import "./styles/main.css"
import "./styles/questions.css"
import "./styles/defaultQuestions.css"
import { QuizData } from "./modules/quizData.js"
import { domController } from "./modules/domController.js";

export const quiz = new QuizData();
domController.init();


