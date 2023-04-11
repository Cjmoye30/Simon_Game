function showHighscores() {
    $("#newHighscoresTable").text("");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        console.log(localStorage)
        let highscoresEntry = $("<li>").html("<span class = 'username'>" + key + "</span> <span class='userscore'>" + value + "</span>").addClass("highscoresEntry");
        $("#newHighscoreTable").append(highscoresEntry);
    }
}
showHighscores();

// Button Functions
$("#backHome").click(()=>{
    location.href = "index.html";
})

$("#clearHS").click(()=>{
    $("#newHighScoreTable").text("");
    localStorage.clear();
})