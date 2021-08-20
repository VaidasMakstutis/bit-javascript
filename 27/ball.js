function rand(min, max) {

    min = Math.ceil(min);

    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function go() {
    ball.style.top = rand(0, y) + 'px';
    ball.style.left = rand(0, x) + 'px';
}

let x = window.innerWidth - 100;
let y = window.innerHeight - 100;
const ball = document.querySelector('.ball-moving');

window.addEventListener('resize', () => {
    x = window.innerWidth - 100;
    y = window.innerHeight - 100;
});

let intervalID;
let isGoing = false;

ball.addEventListener('click', () => {
    if (isGoing) {
        clearTimeout(intervalID);
        isGoing = false;
    }
    else {
        go();
        intervalID = setInterval(go, 1000);
        isGoing = true;
    }
});
