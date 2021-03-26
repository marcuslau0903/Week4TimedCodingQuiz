// Global Memory******
let secondsLeft = 10
let questionNumber = 0
let availableQuestions = []
let currentQuestion = {}
const divTimer = document.getElementById("timer")
const container = document.getElementById("container")
const introSection = document.getElementById("introSection")
const startButton = document.getElementById("startBtn")
const questionContainer = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
// querySelectorAll finds all elements with the class and returns into an Array
const answerButton = document.querySelectorAll(".btn")
const response = document.getElementById("response") 
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


const handleChoiceClicked = (event) => {
    if ((questionNumber + 1) >= questionsArray.length) {
        // We have reached the end of our quiz... 
        document.getElementById("questionContainer").remove()
        endOfQuiz()
    } else {
        document.getElementById("questionContainer").remove();
        questionNumber++;
        createQuestion(questionsArray[questionNumber]);
    }
};

const endOfQuiz = function() {
    const formDivContainer = document.createElement("div")
    formDivContainer.setAttribute("id", "submitForm")

    const form = document.createElement("form")
    form.setAttribute("id","form")
    const h2 = document.createElement("h2")
    h2.textContent = "All Done!"

    const h4 = document.createElement("h4")
    h4.textContent = "Your final score is"

    const inputText = document.createElement("input")
    inputText.setAttribute("type","text")
    inputText.textContent = "Enter Initials"

    const submitButton = document.createElement("a")
    submitButton.setAttribute("id","submitBtn")
}
    
const setTime = function() {
    const callback = function () {
        secondsLeft--
        divTimer.textContent = "Time Left:" + " " + secondsLeft 

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
        }
    }
    const timerInterval = setInterval(callback,1000)
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

const createChoices = (choices) => { 
    const parentDiv = document.createElement("div")
    parentDiv.setAttribute("class","btnGrid")
    parentDiv.setAttribute("id","answerBtns")

const createChoiceAndAppend = (choice) => {
    const button = document.createElement("button")
    button.setAttribute("class","btn" )
    button.setAttribute("data-answer",choice)
    button.textContent = choice;
    button.addEventListener("click", handleChoiceClicked); 
    parentDiv.appendChild(button)
}
    choices.forEach(createChoiceAndAppend)
    return parentDiv
}

const startQuiz = () => {
container.removeChild (introSection)
setTime()
createQuestion(questionsArray[0])
}

startButton.addEventListener("click",startQuiz)




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