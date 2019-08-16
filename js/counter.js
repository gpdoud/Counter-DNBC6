
var nbr = 0;

function loaded() {
    display();
}

function decrement() {
    nbr--;
    display();
}

function increment() {
    nbr++;
    display();
}

function display() {
    var ctrl = document.getElementById("theNbr");
    ctrl.value = nbr;
    ctrl.style.fontWeight = nbr % 2 == 0 ? "bold" : "normal";
    ctrl.style.fontStyle = nbr % 3 == 0 ? "italic" : "normal";
    ctrl.style.color = nbr % 7 == 0 ? "red" : "black";
}