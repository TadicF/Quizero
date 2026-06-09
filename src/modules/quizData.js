import { Answers } from "./answers.js";
import data from "../data/defaultQuestions.json"

export class QuizData { // refactor this so I can have separate Custom and Default classes, also I'll need a new class for keeping default questions and array of custom questions (classes)
    #questions = getQuestions();
    #customQuestions = {};

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
            throw new Error("That question already exists!");
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

function getQuestions() { // make it more specific so you only get questions by type, and difficulty
    const questions = {};
    
    for(let key in data) {
        //questions[key] = {}
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

export const quiz = new QuizData()