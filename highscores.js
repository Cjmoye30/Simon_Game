function showHighscores() {
    $("#newHighscoresTable").text("");
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

        console.log(localStorage);
        let highscoresEntry = $("<li>").html("<span class = 'username'>" + key + "</span> <span class='userscore'>" + value + "</span>").addClass("highscoresEntry");
        $("#newHighscoreTable").append(highscoresEntry);
    }
}
// Show highscores when the page loads
showHighscores();

// Back to homepage on click
$("#backHome").click(()=>{
    location.href = "index.html";
})

// Clear highscores on click and reload the page to clear
$("#clearHS").click(()=>{
    $("#newHighScoreTable").text("");
    localStorage.clear();
    window.location.reload();
})