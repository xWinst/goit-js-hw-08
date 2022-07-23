import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const BREAKPOINT = 'videoplayer-current-time';
const button = document.querySelector('button');

// if (localStorage.getItem(BREAKPOINT)) {
//   player.setCurrentTime(localStorage.getItem(BREAKPOINT));
// }

player.on('timeupdate', throttle(update, 1000));
button.addEventListener('click', onFullScreen);
console.log(button);
let full = false;

function onFullScreen() {
  if (!document.fullscreenElement) {
    player.requestFullscreen();
  }
}

function update(time) {
  localStorage.setItem(BREAKPOINT, time.seconds);
  if (!full && time.seconds > 20) {
    button.dispatchEvent(new Event('click'));
    full = true;
    // player.requestFullscreen().catch(err => {
    //   alert(
    //     `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
    //   );
    //   console.log(err);
    // });
    console.log('=====');
    // document.fullscreenElement;
    // iframe.requestFullscreen();
    //   .then()
    //   .catch(error => console.log);
    // if (!document.fullscreenElement) {
    //   iframe.requestFullscreen().catch(err => {
    //     alert(
    //       `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
    //     );
    //   });
    // } else {
    //   document.exitFullscreen();
    // }
    //   .then()
    //   .catch(error => console.log);
  }
}
