var lampOn = "img/lamp-on.png";
var lampOff = "img/lamp-off.png";

var op = 0;

function ligar() {
    if (op == 0) {
        document.getElementById("lamp").src = lampOn;
        document.getElementById("aLig").play();
        document.body.style.backgroundImage = "url('img/bg-luz-on.jpg')";
        document.getElementById("title").style.color = "black";
        op = 1;
    } else {
        document.getElementById("lamp").src = lampOff;
        document.getElementById("aDeslig").play();
        document.body.style.backgroundImage = "url('img/bg-luz-off.jpg')";
        document.getElementById("title").style.color = "#06C1DE";

        op = 0;
    }
}
