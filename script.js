// function removeTransition(e) {
//     if (e.propertyName !== 'transform') return;
//     e.target.classList.remove('ac');
// }

// function playSound(e) {
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
//     if (!audio) return;

//     key.classList.add('playing');
//     audio.currentTime = 0;
//     audio.play();
// }

// const keys = Array.from(document.querySelectorAll('.piano-key'));
// console.log(keys);

// keys.forEach(key => key.addEventListener('transitionend', removeTransition));
// window.addEventListener('keydown', playSound);

const arrayOfPianoKeys = document.querySelectorAll('.piano-key');
const arrayOfAudio = Array.from(document.querySelectorAll('audio'));
console.log(arrayOfPianoKeys);
console.log(arrayOfAudio);

arrayOfPianoKeys.forEach((elem, i) => {
    elem.addEventListener('click', () => {
       arrayOfAudio[i].play();
       elem.classList.toggle('piano-key-active');
    });
});



// const letters = document.querySelector('.btn-letters');
// letters.addEventListener('click', () => {
//     arrayOfPianoKeys.forEach(e => e.style.content = "data-letter")
// })