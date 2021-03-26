// Global Memory******
let secondsLeft = 60
let questionNumber = 0
const divTimer = document.getElementById("timer")
const container = document.getElementById("container")
const introSection = document.getElementById("introSection")
const startButton = document.getElementById("startBtn")
const questionContainer = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
// querySelectorAll finds all elements with the class and returns into an Array
const answerButton = document.querySelectorAll(".btn")
const submitButton = document.getElementById("submitBtn")
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

const startQuiz = () => {
    container.removeChild (introSection)
    setTime()
    createQuestion(questionsArray[0])
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

const handleChoiceClicked = (event) => {
    if ((questionNumber + 1) >= questionsArray.length) {
        // reached the end of quiz
        document.getElementById("questionContainer").remove()
        endOfQuiz()
    } else {
        document.getElementById("questionContainer").remove();
        questionNumber++;
        createQuestion(questionsArray[questionNumber]);
    }
};

const CalculateTotalScore = () => {

}

const endOfQuiz = function() {
    const formDivContainer = document.createElement("div")
    formDivContainer.setAttribute("id", "submitForm")

    const form = document.createElement("form")
    form.setAttribute("id","form")

    const h2 = document.createElement("h2")
    h2.textContent = "All Done!"

    const h4 = document.createElement("h4")
    h4.textContent = "Your final score is"

    const label = document.createElement("label")
    label.innerText = "Enter Initials: "

    const inputText = document.createElement("input")
    inputText.setAttribute("type","text")
    inputText.setAttribute("id", "nameInput" ) 
    inputText.setAttribute("placeholder", "your name here")

    const submitButton = document.createElement("a")
    submitButton.setAttribute("id","submitBtn")
    submitButton.setAttribute("href","highscores.html")
    submitButton.innerText = "submit"

    formDivContainer.appendChild(form);
    form.appendChild(h2)
    form.appendChild(h4)
    form.appendChild(label)
    label.appendChild(inputText)
    form.appendChild(submitButton)
    document.getElementById("container").appendChild(formDivContainer)

    return formDivContainer
}

const validateChoices = () => {
    // function for each item in an Array 
    answerButton.forEach(element) => {
    if (element.target.innerText === question.correctAnswer) {
        // response.innerText = "correct!"
        alert ("correct")
    }
    else {
        // response.innerText = "wrong!"
        alert ("wrong")
        secondsLeft = secondLeft - 5;
    }
})


const onFormSubmit = () => {
}

startButton.addEventListener("click",startQuiz)
submitButton.addEventListener("submit",onFormSubmit)
answerButton.addEventListener("click",validateChoices)