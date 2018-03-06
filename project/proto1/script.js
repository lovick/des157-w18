var buttons = document.getElementsByClassName("foodLink");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", imgOver);
    buttons[i].addEventListener("mouseout", imgOff);
}

function imgOver() {
    console.log(this.children[0]);
    this.style.border = "3px solid #00ff00";
}

function imgOff() {
    console.log(this.children[0]);
    this.style.border = "";
}