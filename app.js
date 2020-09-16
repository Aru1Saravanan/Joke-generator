//variables
const setupDiv = document.getElementById("setup")
const punchlineDiv = document.getElementById("punchline")
const newJokeBtn = document.getElementById("newJokeBtn")
const punchlineBtn = document.getElementById("punchlineBtn")
let punchLine;

const getJoke = async () => {
    newJokeBtn.classList.toggle("hidden")
    punchlineBtn.classList.toggle("hidden")
    punchlineDiv.classList.remove("bubble")
    punchlineDiv.textContent = ""

    const jokePromise = await fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    const joke = await jokePromise.json()
    setupDiv.textContent = joke[0].setup
    punchLine = joke[0].punchline;
}

const getPunchline = () => {
    punchlineDiv.classList.add("bubble")
    punchlineDiv.textContent = punchLine
    newJokeBtn.classList.toggle("hidden")
    punchlineBtn.classList.toggle("hidden")
}

//event listeners
newJokeBtn.addEventListener("click", getJoke);
punchlineBtn.addEventListener("click", getPunchline);