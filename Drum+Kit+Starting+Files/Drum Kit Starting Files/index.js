
document.querySelectorAll(".drum").forEach(function(btn) {
    btn.addEventListener("click", function() {
        var buttonText = this.innerHTML;
        makeSound(buttonText);
        buttonAnimation(buttonText)
    });
});

// this is keydown function
document.addEventListener("keydown", function(event) {
    makeSound(event.key);   
    buttonAnimation(event.key);
});


function makeSound(key) {
    switch(key) {
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "a":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "s":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-4.mp3').play();
            break;
        case "j":
            new Audio('sounds/snare.mp3').play();
            break;
        case "k":
            new Audio('sounds/crash.mp3').play();
            break;
        case "l":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        default:
            console.log(buttonText);
    }
}

function buttonAnimation(currentkey) {

    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed")

    setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
}