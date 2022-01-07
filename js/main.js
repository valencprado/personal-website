import * as content from './languages.js'

const select = document.getElementById("selectIdioms")
let idiom;

document.body.onload = select.onchange = function() {
    idiom = select.value
    document.documentElement.lang = (idiom == "PORTUGUESE") ? "pt-BR" : "en";
    fillPage()
}

function fillIntroSection