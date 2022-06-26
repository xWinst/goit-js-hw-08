import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
    
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const BREAKPOINT = "videoplayer-current-time";

if (localStorage.getItem(BREAKPOINT)){
    player.setCurrentTime(localStorage.getItem(BREAKPOINT));
}

player.on('timeupdate', throttle(time => 
    localStorage.setItem(BREAKPOINT, time.seconds), 1000));


