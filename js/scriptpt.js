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
var div = document.getElementById('log');
var texto = 'Hoje está um lindo dia!';

function escrever(str, el) {
    var char = str.split('').reverse();
    var typer = setInterval(function() {
        if (!char.length) return clearInterval(typer);
        var next = char.pop();
        el.innerHTML += next;
    }, 100);
}

escrever(texto, div);