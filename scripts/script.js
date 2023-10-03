const ball = document.getElementById('ball')
const frame = document.getElementById('container')
const left_play = document.getElementById('player-one')
const right_play = document.getElementById('player-two')

let posX = 0
let posY = 0
let intervalTime = 0
let rotationAngle = 0

setInterval(() => {
    posX++
    if ((ball.offsetHeight + posX) >= frame.offsetWidth - posX) {
        rotationAngle = 180
        posX *= -1
    }
    if (posX < frame.getBoundingClientRect().left) {

        rotationAngle = 180
    }
    ball.style.transform = `rotate(${rotationAngle}deg) translate(${posX}px, 0px)`
}, 5);


