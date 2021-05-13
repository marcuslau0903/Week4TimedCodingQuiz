// Global Memory******
let secondsLeft = 60
let questionNumber = 0
let score = 0
const divTimer = document.getElementById("timer")
const container = document.getElementById("container")
const introSection = document.getElementById("introSection")
const startButton = document.getElementById("startBtn")
const questionContainer = document.getElementById("questionContainer")
const questionElement = document.getElementById("question")
const submitButton = document.createElement("a")
const inputText = document.createElement("input")
const response = document.getElementById("response")
const formDivContainer = document.createElement("div")
const highScoresDiv = document.createElement ("div")
const form = document.createElement("form")
const goBackBtn = document.getElementById("startBtn")
const clearScoreBtn = document.getElementById("startBtn")

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
        choices: ["Paris","New York","London","Milan"],
        correctAnswer: "New York"
    },
    {
        Question: "What's a baby rabbit called?",
        choices: ["A Kit","Ribben","Rabbot","Kitty"],
        correctAnswer: "A Kit"
    },
    {
        Question: "How many elements are there in the periodic table?",
        choices: ["118 elements","139 elements","98 elements","68 elements"],
        correctAnswer: "118 elements"
    }, {
        Question: "It's illegal in Texas to put what on your neighbour’s Cow?",
        choices: ["Weight","Food","Grafitti","A Sack of Potatos"],
        correctAnswer: "Grafitti"
    }, {
        Question: "The average person does what thirteen times a day?",
        choices: ["Sneeze","Cry","Jump","Laughs"],
        correctAnswer: "Laughs"
    }, {
        Question: "What is the most common colour of toilet paper in France?",
        choices: ["Blue","Yellow","Green","Pink"],
        correctAnswer: "Pink"
    },
]

const startQuiz = () => {
    container.removeChild (introSection)
    setTime()
    createQuestion(questionsArray[0])
    }

// const goBack = () => {

// }

const setTime = function() {
        const callback = function () {
            secondsLeft--
            if ((questionNumber + 1) >= questionsArray.length) { 
                divTimer.textContent = "Time"
            } else {
                divTimer.textContent = "Time Left:" + " " + secondsLeft
            }

            if (secondsLeft <= 0) {
            divTimer.textContent = "Time Left:" + " " + 0 
            clearInterval(timerInterval)
                document.getElementById("questionContainer").remove()
                endOfQuiz()
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
    var clicked = event.target.innerText
    var correct = questionsArray[questionNumber].correctAnswer
    if ((questionNumber + 1) >= questionsArray.length) {
        // reached the end of quiz
    score = secondsLeft
    validateChoices(clicked,correct)
        document.getElementById("questionContainer").remove()
        endOfQuiz()
    } else {
        document.getElementById("questionContainer").remove();
        validateChoices(clicked,correct)
        questionNumber++;
        createQuestion(questionsArray[questionNumber]);
    }
};

const endOfQuiz = function() {
    
    formDivContainer.setAttribute("id", "submitForm")

    form.setAttribute("id","form")

    const h2 = document.createElement("h2")
    h2.textContent = "End of Quiz!"

    const h4 = document.createElement("h4")
    h4.textContent = `Your final score is ${score}`
    //need to create span ??
    const label = document.createElement("label")
    label.innerText = "Enter Initials: "

    
    inputText.setAttribute("type","text")
    inputText.setAttribute("id", "nameInput" ) 
    inputText.setAttribute("placeholder", "your name here")

    
    submitButton.setAttribute("id","submitBtn")
    submitButton.setAttribute("href","highscores.html")
    submitButton.setAttribute("type","submit")
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

const validateChoices = (clicked, correct) => { 
    if (clicked === correct) {
        
    }
    else {
        secondsLeft = secondsLeft -5;
    }
}

const onFormSubmitClick = (e) => {
    e.preventDefault()
    const nameInputValue = inputText.value
    if (nameInputValue === ""){
        displayMessage ("error", "can't leave blank, please enter your initials")
    } else {

        localStorage.setItem(nameInputValue,score)
        }
        container.removeChild(formDivContainer)
        container.appendChild(highScoresDiv)
        renderLastRegistered()
}

// researched function (combine Key and value to array) 
function allStorage() {
    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;
    for (; key = keys[i]; i++) {
        archive.push( key + ' : ' + localStorage.getItem(key));
    }
    return archive;
}

// credits to Meedaxa for the guidance
const renderLastRegistered = () => {
    const highScores = allStorage()
    const highScoresTable = document.createElement ("div")
    highScoresTable.setAttribute ("id","highScoresTable")
    const h1 = document.createElement("h1")
    h1.setAttribute("id","h2")
    h1.innerText = "HighScores"
    const goBackButton = document.createElement ("button")
        goBackButton.innerText = "Go Back"
        goBackButton.setAttribute ("id", "startBtn")

        const clearButton = document.createElement ("button")
        clearButton.innerText = "ClearScores"
        clearButton.setAttribute ("id", "startBtn")

    const table = document.createElement("table")
    for (var i=0 ; i < highScores.length ; i++){
        const tableRow = document.createElement("tr")
        const tableData = document.createElement("td")
        tableData.innerText = highScores[i]
        
        highScoresTable.appendChild(h1)
        tableRow.appendChild(tableData)
        table.appendChild(tableRow)
        highScoresTable.appendChild(table)
    }
        
        highScoresTable.appendChild(goBackButton)
        highScoresTable.appendChild(clearButton)
        highScoresDiv.appendChild(highScoresTable)

    return highScoresDiv
}

// const displayHighScores = () => {
// }

// // const goBack = () => {
//     container.removeChild(highScoresDiv)
//     container.appendChild(introSection)
// // }




startButton.addEventListener("click",startQuiz)
submitButton.addEventListener("click",(e)=>onFormSubmitClick(e))
// clearButton.addEventListener("click",clearScores)
// goBackButton.addEventListener("click",goBack)

