const rand = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

const create = (count) => {
    for (let i = 0; i < count; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.top = rand(0, h) + 'px';
        square.style.left = rand(0, w) + 'px';
        document.body.appendChild(square);
    }
}

let co;

const go = (e) => {

    // console.log(e.pageX, e.pageY);
    // console.log(co);

    const newX = e.pageX - co[1];
    const newY = e.pageY - co[0];

    console.log(newX)

    co[4].style.left = (co[3] + newX) + 'px';
    co[4].style.top = (co[2] + newY) + 'px';

    // console.log(co);

}


let w = window.innerWidth - 150;
let h = window.innerHeight - 150;

window.addEventListener('resize', () => {
    w = window.innerWidth - 150;
    h = window.innerHeight - 150;

});

create(5);

document.querySelectorAll('.square').forEach(s => {
    s.addEventListener('mousedown', e => {
        e.target.style.cursor = 'grabbing';
        co = [e.pageY, e.pageX, parseInt(e.target.style.top), parseInt(e.target.style.left), e.target];
        document.body.addEventListener('mousemove', go);
        console.log(e.pageX, e.pageY);
    });
});


document.querySelectorAll('.square').forEach(s => {
    s.addEventListener('mouseup', e => {
        e.target.style.cursor = 'grab';
        document.body.removeEventListener('mousemove', go);
        console.log('mouse up');
    });
});