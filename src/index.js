import {getImages} from './contents.js'

let current = 0;
let content = getImages();


function setContent(index) {
    let placeholder = document.querySelector("#content-placeholder");
    placeholder.setAttribute("src", content[index]);
}


function moveContentLeft() {
    current--;
    if(current < 0) current = content.length - 1;
    setContent(current);
}

function moveContentRight() {
    current++;
    if(current >= content.length) current = 0;

    setContent(current);
}

window.onload = () => {
    setContent(0);
    document.getElementById("left").onclick = moveContentLeft;
    document.getElementById("right").onclick = moveContentRight;
}