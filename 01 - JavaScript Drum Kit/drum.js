
function addKeyEvent() {
    window.addEventListener('keydown', playSound);
}

function stopSound() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    addAnimation(key);
}

function removeTransition(playedSound) {
    if(playedSound.propertyName !== 'transform') return;
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