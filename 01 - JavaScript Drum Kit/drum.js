
function addKeyEvent() {
    window.addEventListener('keydown', playSound);
}

function stopSound() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function playSound(clicked) {
    const audio = document.querySelector(`audio[data-key="${clicked.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${clicked.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    addAnimation(key);
}

function removeTransition(played) {
    if(played.propertyName !== 'transform') return;
    this.classList.remove('playing');
    stopSound();
}

function addAnimation(key) {
    var clicked = key;
    clicked.classList.add('playing');
}

function init() {
    stopSound();
    addKeyEvent();
}