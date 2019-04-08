// Get our elements
const player = document.querySelector('.player');
console.log({player});

const video = player.querySelector('.viewer');
progress = player.querySelector('.progress');
progress = player.querySelector('.progress__filled');
progress = player.querySelector('.toggle');
progress = player.querySelector('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

//build function
function togglePlay(){
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }
}

//Hook up event listeners