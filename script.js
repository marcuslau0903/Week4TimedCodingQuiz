// Global Memory******
let counter = 60
const timeStart = document.getElementById("seconds")
const container = document.getElementById("container")
const introSection = document.getElementById("introSection")
const startButton = document.getElementById("startBtn")
const questionContainer = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
const answerButton = document.querySelectorAll(".btn")
const response = document.getElementById("response")
// querySelectorAll finds all elements with the class and returns into an Array
let availableQuestions = []
let currentQuestion = {}
let questionNumber = 0



const questionsArray = [ 
    {
        Question: "What's the biggest animal in the world?",
        choices: ["The blue whale","Elephant", "Chinese Salamander","Giraffe"],
        correctAnswer: "The blue whale"
    },
    {
        Question: "Which country is brie cheese originally from?",
        choices: ["Denmark","Italy","Finland","France"],
        correctAnswer: "France"
    },
    {
        Question: "What is the capital of Iceland?",
        choices: ["KÓPAVOGUR","HAFNARFJÖRÐUR","REYKJAVÍK","AKUREYRI"],
        correctAnswer: "REYKJAVÍK"
    },
    {
        Question: "Which city had the first ever fashion week?",
        choices: ["paris","New York","London","Milan"],
        correctAnswer: "New York"
    },
    {
        Question: "How many minutes in a game of rugby league?",
        choices: ["90 minutes","80 minutes","70 minutes","75 minutes"],
        correctAnswer: "80 minutes"
    },
]

// startBtn.addEventListener("click", function() {
     // timeStart.innerHTML = 60
     // const timeTicking = setInterval(() => {
     // counter--     // timeStart.innerHTML = counter
     // }, 1000);

// // introSection.style.display ="none"
// startButton.classList.add("hide")
// } 
// )



const createChoices = (choices) => { 
    const parentDiv = document.createElement("div")
    parentDiv.setAttribute("class","btnGrid")
    parentDiv.setAttribute("id","answerBtns")

const createChoiceAndAppend = (choice) => {
    const button = document.createElement("button")
    button.setAttribute("class","btn" )
    button.setAttribute("data-answer",choice)
    button.textContent = choice;

    parentDiv.appendChild(button)
}
    choices.forEach(createChoiceAndAppend)
    return parentDiv
}


const createQuestion = (question) => {
    const divContainer = document.createElement("div")
    divContainer.setAttribute("id","questionContainer")
    divContainer.setAttribute("data-answer", question.correctAnswer)

    const h2 = document.createElement("h2")
    h2.setAttribute("id","question")
    h2.textContent = question.Question;

    //create choices
    const choices = createChoices(question.choices)
    divContainer.append(h2,choices)
    container.append(divContainer)
}


const startQuiz = () => {
container.removeChild (introSection)
// create question container
//remove the start button container
//append questionContainer to the DOM
createQuestion(questionsArray[0])
}

startButton.addEventListener("click",startQuiz) 


// function startQuiz() {
//     introSection.style.display="none"
//     questionContainer.classList.remove("hide")
//     availableQuestions =[...questionsArray]
//     getNewQuestion()
// }

// getNewQuestion = () => { 
// const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
// currentQuestion = questionsArray[questionsIndex]
// question.innerText = currentQuestion.Question
// answerBtn1.innerText = currentQuestion.choice1
// answerBtn2.innerText = currentQuestion.choice2
// answerBtn3.innerText = currentQuestion.choice3
// answerBtn4.innerText = currentQuestion.choice4
// }

// getNextQuestion = () => {
//     // var questionsIndex = questionNumber += 1
//     currentQuestion = questionsArray[questionsIndex]
//     question.innerText = currentQuestion.Question
//     answerBtn1.innerText = currentQuestion.choice1
//     answerBtn2.innerText = currentQuestion.choice2
//     answerBtn3.innerText = currentQuestion.choice3
//     answerBtn4.innerText = currentQuestion.choice4
// }

// // function for each item in an Array 
// answerButton.forEach(element => {
//     // adding event listener to each button
//         element.addEventListener("click", event => {
//             if (event.target.innerText === currentQuestion.correctAnswer) {
//                 response.innerText = "correct!"
//                 response.classList.remove("hide")
//             }
//             else {
//                 response.innerText = "wrong!"
//                 response.classList.remove("hide")
//             }
//        })
//     })