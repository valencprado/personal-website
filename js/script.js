/*var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
*/



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
/*window.addEventListener('scroll', revealLeft)

function revealLeft() {
    var reveals = document.querySelectorAll('.reveal-left')

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
*/