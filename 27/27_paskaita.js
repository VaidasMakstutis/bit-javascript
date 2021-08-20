const ruler = document.querySelector('.ruler');

for (let j = 0; j <= 3000; j += 200) {

    const segment = document.createElement('div');
    segment.classList.add('ruler-segment');

    const digit = document.createElement('span');
    segment.appendChild(digit);
    digit.appendChild(document.createTextNode(j + 'px'));
    ruler.appendChild(segment);
}


const ball = document.querySelector('.ball');
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    if (window.scrollY > 400) {
        ball.style.top = 400 + window.scrollY + 'px'
    }
});


const ballSticked = document.querySelector('.ball-sticked');
document.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        ballSticked.style.top = window.scrollY + 'px';
    }
});