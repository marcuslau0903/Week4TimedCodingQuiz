const goBackBtn = document.getElementById("startBtn")
const clearScoreBtn = document.getElementById("startBtn")

const goBack = () => {
    location.href ="./index.html"
}

const clearScore = () => {
    localStorage.clear()
}

goBackBtn.addEventListener ("click", goBack)
ClearScoreBtn.addEventListener ("click",ClearScore)