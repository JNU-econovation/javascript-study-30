
function initiateDrum() {
    var keys = document.querySelectorAll('.key');
    window.addEventListener('keydown', playDrum);
    keys.forEach(key => key.addEventListener('transitionend', returnKeys));
}

function playDrum(e) {
    hitDrum(e);
    playAudio(e);
}

function hitDrum(e) {
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!key) {
        return false;
    }
    key.classList.add('playing');
}

function playAudio(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) {
        return false;
    }
    audio.currentTime = 0; // 재생 시간 처음으로 돌리기
    audio.play();
}

function returnKeys(e) {
    if(e.propertyName != 'transform') {
        return false;
    }
    this.classList.remove('playing');
}