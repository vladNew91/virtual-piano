const arrayOfPianoKeys = document.querySelectorAll('.piano-key');

//change letters and notes
const btnUseLetters = document.querySelector('.btn-letters');
const btnUseNotes = document.querySelector('.btn-notes');

btnUseLetters.addEventListener('click', () => {
    arrayOfPianoKeys.forEach(el => {
        el.classList.add("letter");
        btnUseLetters.classList.add("btn-active");
        btnUseNotes.classList.remove("btn-active");
    })
});

btnUseNotes.addEventListener('click', () => {
    arrayOfPianoKeys.forEach(el => {
        el.classList.remove("letter");
        btnUseNotes.classList.add("btn-active");
        btnUseLetters.classList.remove("btn-active");
    })
});

//fullscreen
const btnFullscreen = document.querySelector('.fullscreen');

btnFullscreen.addEventListener("click", () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
        document.exitFullscreen();
    }
});

//piano
const arrayOfAudio = document.querySelectorAll('audio');
const pianoKey = document.querySelectorAll('.piano-key');
const pianoBlock = document.querySelector('main');

const playSound = (event) => {
    event.target.classList.add('piano-key-active-pseudo', 'piano-key-active');
    // arrayOfAudio[arrayOfPianoKeys.indexOf(event.target)].play();
    // arrayOfAudio[arrayOfPianoKeys.indexOf(event.target)].currentTime = 0;
};

const stopSound = (event) => {
    event.target.classList.remove('piano-key-active-pseudo', 'piano-key-active');
};

const mouseDown = (event) => {
    if(event.target.classList.contains('piano-key')) {
        event.target.classList.add('piano-key-active-pseudo', 'piano-key-active');
    }

    arrayOfPianoKeys.forEach((el, i) => {
        el.addEventListener('mouseover', playSound);
        el.addEventListener('mouseout', stopSound);
        if (el.classList.contains('piano-key-active-pseudo')) {
            arrayOfAudio[i].play();
            arrayOfAudio[i].currentTime = 0;
        }
    });
};

const mouseUp = () => {
    arrayOfPianoKeys.forEach((el, i) => {
        el.classList.remove('piano-key-active-pseudo', 'piano-key-active');
        el.removeEventListener('mouseover', playSound);
        el.removeEventListener('mouseout', stopSound);
    });
};

pianoBlock.addEventListener('mousedown', mouseDown, false);
pianoBlock.addEventListener('mouseup', mouseUp);

//keyboard
const arrayKeyboardKeys = ["KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", 
    "KeyK", "KeyL", "KeyR", "KeyT", "KeyT","KeyU", "KeyI", "KeyO"];


window.addEventListener('keydown', (event) => {
    if(arrayKeyboardKeys.includes(event.code)) {
        let numberOfIndex = arrayKeyboardKeys.indexOf(event.code);
        arrayOfPianoKeys[numberOfIndex].classList.add('piano-key-active-pseudo', 
            'piano-key-active');
        arrayOfAudio[numberOfIndex].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(arrayKeyboardKeys.includes(event.code)) {
        let numberOfIndex = arrayKeyboardKeys.indexOf(event.code);
        arrayOfPianoKeys[numberOfIndex].classList.remove('piano-key-active-pseudo', 
            'piano-key-active');
    }
});
