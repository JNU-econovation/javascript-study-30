
function addKeyEvent() {
    window.addEventListener('keydown', playSound);
}

function stopSound() {
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    addAnimation(key);
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
    stopSound();
}

function addAnimation(key) {
    key.classList.add('playing');
}

function init() {
    stopSound();
    addKeyEvent();
}