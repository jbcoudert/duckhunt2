var zoneGame = document.createElement("div");
document.body.appendChild(zoneGame);
zoneGame.setAttribute("class", "zone");

var duck = document.createElement("div");


var btn = document.createElement("button");
document.body.appendChild(btn);
btn.innerHTML = "Click for Play"


 function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var j = 0; j < 6; j++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color
}


function frame() {
    var allDucks = document.getElementsByClassName("ducks")
    for (let i = 0; i < allDucks.length; i++) {
        var posX = Math.floor(Math.random() * 550);
        var posY = Math.floor(Math.random() * 550);

        allDucks[i].style.left = posX + "px";
        allDucks[i].style.top = posY + "px";
        allDucks[i].style.transitionDuration = "1s"
    }
}

function killduck() {
    this.remove()
    var duck = document.createElement("div");
    zoneGame.appendChild(duck);
    duck.setAttribute("class", "ducks");
    duck.style.backgroundColor = getRandomColor();
    duck.addEventListener("click", killduck);
}

btn.addEventListener("click", function () {
    for (let i = 0; i < 15; i++) {
        var duck = document.createElement("div");
        zoneGame.appendChild(duck);
        duck.setAttribute("class", "ducks");
        
        duck.style.backgroundColor = getRandomColor();
        
        duck.addEventListener("click", killduck);
    }
    setInterval(frame, 2000)
})

