window.addEventListener('scroll', reveal)

function reveal() {
    var reveals = document.querySelectorAll('.reveal')

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight
        var revealtop = reveals[i].getBoundingClientRect().top
        var revealpoint = 150

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active')

        } else {
            reveals[i].classList.remove('active')
        }
    }
}
var index = 0;
var text = "Hi! I'm Valentina :)";
var speed = 50;

function textEffect() {
    if (index < text.length) {
        document.getElementById("effect")
            .innerHTML += text.charAt(index);
        index++;
        setTimeout(textEffect, speed);
    }
}