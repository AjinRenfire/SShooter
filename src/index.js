//player control


/******* initial variables  *******/
var isRunning = true;
var inputKey = "";
const SPEED = 10;
const PLAYER = document.getElementById("player");
const SPACE = document.getElementById("space");
PLAYER.x = PLAYER.offsetLeft;
PLAYER.y = PLAYER.offsetTop;
/* *********************************** */

function shootAmmo(){
    const ammo = document.createElement("div");
    ammo.setAttribute("id","ammo");
    ammo.style.left = PLAYER.x+25+"px";
    ammo.style.top = PLAYER.y-32+"px";
    
    SPACE.appendChild(ammo);

}

function getInput(){
    document.onkeydown = getKey; // getKey is a function

}

function getKey(event){
    event = (event)?event : window.event;
    switch(event.key){
        case "ArrowLeft":
            PLAYER.x+=(-SPEED);
            PLAYER.style.left = PLAYER.x+"px";
            break;
        case "ArrowRight":
            PLAYER.x+=SPEED;
            PLAYER.style.left = PLAYER.x+"px";
            break;
        case "ArrowUp":
            shootAmmo();
            break;
    }
}

getInput();


