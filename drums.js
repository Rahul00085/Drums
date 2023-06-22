var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {


        setTimeout(() => {
            document.querySelector("." + event.key).style.color = "Green";
        }, 300);

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}

function changeColor(key) {

}

document.addEventListener("keypress", function (event) {

    document.querySelector("." + event.key).style.color = "black";

    setTimeout(() => {
        document.querySelector("." + event.key).style.color = "white";
    }, 300);


    makeSound(event.key);

    buttonAnimation(event.key);
});



function makeSound(key) {

    switch (key) {
        case 'w':
            var tom1 = new Audio("Audio/tom-1.mp3");
            tom1.play();
            break;

        case 'a':
            var tom2 = new Audio("Audio/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            var tom3 = new Audio("Audio/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            var tom4 = new Audio("Audio/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            var snare = new Audio("Audio/snare.mp3");
            snare.play();
            break;

        case 'k':
            var crash = new Audio("Audio/crash.mp3");
            crash.play();
            break;

        case 'l':
            var kick = new Audio("Audio/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);

    }




}

function buttonAnimation(currentKey) {

    var animation = document.querySelector("." + currentKey);

    animation.classList.add("pressed");

    setTimeout(function () {
        animation.classList.remove("pressed");




    }, 300);
}