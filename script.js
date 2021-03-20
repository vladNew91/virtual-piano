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
// arrayOfPianoKeys.forEach((elem, i) => {
//     elem.addEventListener('mousedown', () => {
//         arrayOfAudio[i].play();
//         arrayOfAudio[i].currentTime = 0;
//         elem.classList.add('piano-key-active-pseudo', 'piano-key-active');
//     }, false);
    
//     elem.addEventListener('mouseup', () => {
//         elem.classList.remove('piano-key-active-pseudo', 'piano-key-active');
//     });

//     elem.addEventListener('mouseover', () => {
//         arrayOfAudio[i].play();
//         arrayOfAudio[i].currentTime = 0;
//         elem.classList.add('piano-key-active-pseudo', 'piano-key-active');
//     });

//     elem.addEventListener('mouseout', () => {
//         elem.classList.remove('piano-key-active-pseudo', 'piano-key-active');
//     }, false);
// });

const arrayOfAudio = document.querySelectorAll('audio');
const pianoKey = document.querySelectorAll('.piano-key');
const pianoBlock = document.querySelector('main');

const playSound = (event) => {
    event.target.classList.add('piano-key-active-pseudo', 'piano-key-active');
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
        if (el.classList.contains('piano-key-active-pseudo', 'piano-key-active')) {
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
// const arrayKeyboardKeys = {
//     key1: "KeyD",
//     key2: "KeyF",
//     key3: "KeyG",
//     key4: "KeyH",
//     key5: "KeyJ",
//     key6: "KeyK",
//     key7: "KeyL",
//     key8: "KeyR",
//     key9: "KeyT",
//     key9: "KeyT",
//     key10: "KeyU",
//     key11: "KeyI",
//     key12: "KeyO"
// }
//I KNOW ITS SHIT)
window.addEventListener('keydown', (event) => {
    if(event.code == "KeyD") {
        arrayOfPianoKeys[0].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[0].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyD") {
        arrayOfPianoKeys[0].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyF") {
        arrayOfPianoKeys[1].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[1].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyF") {
        arrayOfPianoKeys[1].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyG") {
        arrayOfPianoKeys[2].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[2].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyG") {
        arrayOfPianoKeys[2].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyH") {
        arrayOfPianoKeys[3].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[3].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyH") {
        arrayOfPianoKeys[3].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyJ") {
        arrayOfPianoKeys[4].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[4].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyJ") {
        arrayOfPianoKeys[4].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyK") {
        arrayOfPianoKeys[5].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[5].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyK") {
        arrayOfPianoKeys[5].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyL") {
        arrayOfPianoKeys[6].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[6].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyL") {
        arrayOfPianoKeys[6].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyR") {
        arrayOfPianoKeys[7].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[7].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyR") {
        arrayOfPianoKeys[7].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyT") {
        arrayOfPianoKeys[8].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[8].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyT") {
        arrayOfPianoKeys[8].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyU") {
        arrayOfPianoKeys[10].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[10].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyU") {
        arrayOfPianoKeys[10].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyI") {
        arrayOfPianoKeys[11].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[11].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyI") {
        arrayOfPianoKeys[11].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});

window.addEventListener('keydown', (event) => {
    if(event.code == "KeyO") {
        arrayOfPianoKeys[12].classList.add('piano-key-active-pseudo', 'piano-key-active')
        arrayOfAudio[12].play();
    }
});

window.addEventListener('keyup', (event) => {
    if(event.code == "KeyO") {
        arrayOfPianoKeys[12].classList.remove('piano-key-active-pseudo', 'piano-key-active')
    }
});
