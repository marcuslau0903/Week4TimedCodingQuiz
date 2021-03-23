// Global Memory******
let counter = 60
const timeStart = document.getElementById("seconds")
const introSection = document.getElementById("IntroSection")
const startButton = document.getElementById("startBtn")
const questionContainer = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
const answerButton = document.querySelectorAll(".btn")
const response = document.getElementById("response")
// querySelectorAll finds all elements with the class and returns into an Array
let availableQuestions = []
let currentQuestion = {}
let questionNumber = 0



let questionsArray = [ 
    {
        Question: "What's the biggest animal in the world?",
        choice1: "The blue whale",
        choice2: "Elephant",
        choice3: "Chinese Salamander",
        choice4: "Giraffe",
        answer: "The blue whale"
    },
    {
        Question: "Which country is brie cheese originally from?",
        choice1: "Denmark",
        choice2: "Italy",
        choice3: "Finland",
        choice4: "France",
        answer: "France"
    },
    {
        Question: "What is the capital of Iceland?",
        choice1: "KÓPAVOGUR",
        choice2: "HAFNARFJÖRÐUR",
        choice3: "REYKJAVÍK",
        choice4: "AKUREYRI",
        answer: "REYKJAVÍK"
    },
    {
        Question: "Which city had the first ever fashion week?",
        choice1: "paris",
        choice2: "New York",
        choice3: "London",
        choice4: "Milan",
        answer: "New York"
    },
    {
        Question: "How many minutes in a game of rugby league?",
        choice1: "90 minutes",
        choice2: "80 minutes",
        choice3: "70 minutes",
        choice4: "75 minutes",
        answer: "80 minutes"
    },
]

// startBtn.addEventListener("click", function() {
//     // timeStart.innerHTML = 60
//     // const timeTicking = setInterval(() => {
//     // counter--
//     // timeStart.innerHTML = counter
//     // }, 1000);

// // introSection.style.display ="none"
// startButton.classList.add("hide")
// } 
// )

startButton.addEventListener("click",startQuiz) 

function startQuiz() {
    introSection.style.display="none"
    questionContainer.classList.remove("hide")
    availableQuestions =[...questionsArray]
    getNewQuestion()
}

getNewQuestion = () => { 
const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = questionsArray[questionsIndex]
question.innerText = currentQuestion.Question
answerBtn1.innerText = currentQuestion.choice1
answerBtn2.innerText = currentQuestion.choice2
answerBtn3.innerText = currentQuestion.choice3
answerBtn4.innerText = currentQuestion.choice4
}

getNextQuestion = () => {
    // const questionsIndex = questionNumber + 1
    currentQuestion = questionsArray[questionsIndex]
    question.innerText = currentQuestion.Question
    answerBtn1.innerText = currentQuestion.choice1
    answerBtn2.innerText = currentQuestion.choice2
    answerBtn3.innerText = currentQuestion.choice3
    answerBtn4.innerText = currentQuestion.choice4
}

// function for each item in an Array 
answerButton.forEach(element => {
// adding event listener to each button
    element.addEventListener("click", event => {
        if (event.target.innerText === currentQuestion.answer) {
            response.innerText = "correct!"
            response.classList.remove("hide")
        }
        else {
            response.innerText = "wrong!"
            response.classList.remove("hide")
        }
    })
     // getNextQuestion()   
})

