var lampOn = "img/lamp-on.png";
var lampOff = "img/lamp-off.png";

var op = 0;

function ligar() {
    if (op == 0) {
        document.getElementById("lamp").src = lampOn;
        document.getElementById("aLig").play();
        document.body.style.backgroundImage = "url('https://github.com/FrkP9/pixel-lamp/blob/main/img/bg-luz-on.jpg?raw=true')";
        document.getElementById("title").style.color = "black";
        op = 1;
    } else {
        document.getElementById("lamp").src = lampOff;
        document.getElementById("aDeslig").play();
        document.body.style.backgroundImage = "url('https://github.com/FrkP9/pixel-lamp/blob/main/img/bg-luz-off.jpg?raw=true')";
        document.getElementById("title").style.color = "#06C1DE";

        op = 0;
    }
}
