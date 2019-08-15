
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
    document.getElementById("theNbr").value = nbr;
    if(nbr == 0) {
        document.getElementById("theNbr").style.fontSize = "3em";
    } else {
        document.getElementById("theNbr").style.fontSize = "1em";
    }
}