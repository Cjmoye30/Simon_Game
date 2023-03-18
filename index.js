// Variables
const colors = ["red", "blue", "green", "yellow"];
let level = 0;


// Event Listeners for buttons
// When the button is clicked, then a sound is played
$(".col").click(function(e){
    let userSelect = e.target.id;
    console.log(userSelect);

    // Play the correct sound of the button selected
    var audio = new Audio("assets/sounds/"+userSelect+".mp3")
    audio.play();
})


