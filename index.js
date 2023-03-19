// Variables
const colors = ["red", "blue", "green", "yellow"];
let computerArr = [];
const maxLevel = 20;
let level = 0;
let displayIndex = 0;
let checkIndex = 0;
let seconds = 0;
let finalSeconds = 0;

// Event Listeners
$("#startButton").click(function () {
    level = 1;
    $("#level").text("Level: " + level);
    $("#titleSection").attr("style", "display: none");
    $("#level").attr("style", "display: block");
    playGame();
    gameClock();
})

$(".col").click(function (e) {
    effects(e.target.id);
    if (e.target.id === computerArr[checkIndex]) {
        console.log("Correct!");
        checkIndex++;
        console.log(level, checkIndex);
        if(level === checkIndex) {
            console.log("Move to the next level");
            level++;
            console.log(level);
            setTimeout(function(){
                $("#level").text("Level: "+level);
                playGame();
            },500)
        }
    } else {
        console.log("Incorrect!");
        $("#level").text("Wrong!");
        finalSeconds = seconds;
        clearInterval(gameTimer);

        $("body").attr("style", "background-color: red");
        setTimeout(() => {
            $("body").attr("style", "background-color: white");
        }, 100);

        // Show the user score and highscore sections

        setTimeout(() => {
            userScore();
            $("#gameContainer").attr("style", "display: none");
            $("#highscoresSection").attr("style", "display: block");            
        }, 1000);
    }
})

// Functions
function generateGamePattern() {
    for (let i = 0; i < maxLevel; i++) {
        let randNum = Math.floor(Math.random() * colors.length);
        let randColor = colors[randNum];
        computerArr.push(randColor);
    }
    console.log(computerArr);
}

function showPattern() {
    setTimeout(function(){
        console.log(computerArr[displayIndex]);
        effects(computerArr[displayIndex]);
        displayIndex++;
        if(displayIndex < level) {
            showPattern();
        }
    },500)
}

function playGame() {
    checkIndex = 0;
    displayIndex = 0;
    showPattern();
}

function effects(x) {
    // Flash buttons on click or computer generate
    $("#" + x).attr("style", "background-color: whitesmoke");
    setTimeout(function () {
        $("#" + x).removeAttr("style", "background-color: whitesmoke");
    }, 100);

    // Play sound of button click or computer generate
    var audio = new Audio("assets/sounds/" + x + ".mp3")
    audio.play();
}

function gameClock (){
    gameTimer = setInterval(() => {
        seconds++;
        $("#timer").text(seconds);
    }, 1000);
}

function userScore () {
    $("#userLevel").text(level - 1);
    $("#userTime").text(finalSeconds);
}

// Create game pattern on document load
generateGamePattern();
