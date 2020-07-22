const soundsElem = document.querySelector('#sounds');

// immediately expessed function
// if using async must call in function
(async () => {
    const sounds = await getSounds();
    addSoundsToPage(sounds);
})();


async function getSounds() {
    const response = await fetch('./sounds.json');
    const json = await response.json();
    return json;
}

function addSoundsToPage(sounds) {
    sounds.forEach(sound => {
        const soundDiv = document.createElement('div');
        // css
        soundDiv.className = 'sound';

        const soundTitle = document.createElement('h2');
        soundTitle.textContent = sound.title;
        
        const player = document.createElement('audio');
        player.setAttribute('src', `sounds/${sound.src}`)
        soundDiv.appendChild(player);

     
     
        // add event listener to play sound
        soundDiv.addEventListener('mousedown', () => {
            soundDiv.style.background = '#0941a1';
            player.currentTime = 0;
            player.play();
        });

        soundDiv.addEventListener('mouseup', () => {
            soundDiv.style.background = '';
        });

        soundDiv.appendChild(soundTitle);
        soundsElem.appendChild(soundDiv);
    });

}

