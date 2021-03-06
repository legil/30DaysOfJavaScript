// Get our elements
const player = document.querySelector('.player');
console.log({player});

const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelector('[data-skip]');
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
   const icon = this.paused ? '►' : '▮ ▮';
   toggle.textContent = icon;
   //console.log('Update the button'); 
}


fucntion skip(){
 console.log('Skipping!');
}


//Hook up the different event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);

