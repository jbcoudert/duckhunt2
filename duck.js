var zoneGame = document.createElement("div");
document.body.appendChild(zoneGame);
zoneGame.setAttribute("class", "zone");

var duck = document.createElement("div");

var compteur = document.createElement("p")
document.body.appendChild(compteur)
compteur.innerHTML = 0

cpt = 0


var btn = document.createElement("button");
document.body.appendChild(btn);
btn.innerHTML = "Click for Play";

function setRandomPosition(duck) {
    var posX = Math.floor(Math.random() * 550);
    var posY = Math.floor(Math.random() * 550);
    duck.style.left = posX + "px";
    duck.style.top = posY + "px";
}
function createDuck() {
    var duckElement = document.createElement("div");
    zoneGame.appendChild(duckElement);
    duckElement.setAttribute("class", "duck");
    duckElement.style.backgroundColor = getRandomColor();

    return duckElement
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}


function frame() {
    var allDucks = document.getElementsByClassName("duck")
    for (let i = 0; i < allDucks.length; i++) {
        setRandomPosition(allDucks[i])
        allDucks[i].style.transitionDuration = Math.floor(Math.random() * 4 + 1) + "s"
    }
}

function killduck() {
    this.remove()
    var duck = createDuck()
    duck.addEventListener("click", killduck);
    setRandomPosition(duck)
    compteur.innerHTML = cpt++
}

btn.addEventListener("click", function () {
    for (let i = 0; i < 10; i++) {
        var duck = createDuck()
        setRandomPosition(duck)
        duck.style.backgroundColor = getRandomColor();
        duck.addEventListener("click", killduck);
    }
    setInterval(frame, 2000)
})

