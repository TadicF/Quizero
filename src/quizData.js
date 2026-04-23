import { Answers } from "./answers.js";
import fs from "fs";

const data = JSON.parse(fs.readFileSync("./data/defaultQuestions.json", "utf-8"))

export class QuizData {
    #questions = getQuestions();
    #customQuestions = {}

    add(question, corrAnswer, falseAnswers, type) {
        if(!this.#customQuestions[type]) {
            this.#customQuestions[type] = [];
        } 

        if(checkAvailability(question, this.#customQuestions, type)) {
            const obj = {};
            obj.title = question;
            obj.answer = new Answers(corrAnswer, falseAnswers, type);
            this.#customQuestions[type].push(obj);
        }
        else {
            throw new Error("That question already exists!")
        }
    }   

    remove(question, type) {
        if(question === undefined || type === undefined) throw new Error("Missing required parameters");
        for(let i = 0; i < this.#customQuestions[type].length; i++) {
            if(this.#customQuestions[type][i].title === question) {
                this.#customQuestions[type].splice(i, 1)
            }
        }
    }

    find(question, type) {
        if(question === undefined || type === undefined) throw new Error("Missing required parameters");
        for(let i = 0; i < this.#customQuestions[type].length; i++) {
            if(this.#customQuestions[type][i].title === question) {
                return this.#customQuestions[type][i];
            }
        }
    }   

    get questions() { 
        return this.#questions;
    }   

    get customQuestions() {
        return this.#customQuestions
    }

    get types() {
        const types = [];
        for(let key in this.#questions) {
            types.push(key);
        }
        return types;
    }
};

function getQuestions() {
    const questions = {};
    
    for(let key in data) {
        questions[key] = {}
        questions[key] = data[key];
    }

    return questions;
}

function checkAvailability(question, questionsData, type) {
    for(let i = 0; i < questionsData[type].length; i++) {
        if(questionsData[type][i].title === question) {
            return false;
        }
    }
    
    return true;
}

const quiz = new QuizData();
quiz.add("What is the capital city of Germany", "Berlin", ["Madrid", "Barcelona", "Pairs"] , "Geography");
quiz.add("What is the capital city of France", "Berlin", ["Madrid", "Barcelona", "Pairs"] , "Geography");
quiz.add("What is the capital city of Uruguay", "Berlin", ["Madrid", "Barcelona", "Pairs"] , "Geography");
quiz.add("What is the capital city of Spain", "Berlin", ["Madrid", "Barcelona", "Pairs"] , "Geography");

console.log(quiz.customQuestions);
quiz.remove("What is the capital city of Germany", "Geography");
quiz.remove("What is the capital city of Spain", "Geography");
quiz.find("What is the capital city of Uruguay", "Geography");
console.log(quiz.customQuestions);
