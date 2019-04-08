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
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    /*
    if(video.paused){
        video.play();
    } else {
        video.pause();
    }*/
}

function updateButton(){
   const icon = this.pause;
   console.log('Update the button'); 
}



//Hook up the different event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

