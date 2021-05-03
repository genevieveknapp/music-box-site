import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/mobilemenu'
import MusicBoxes from './modules/MusicBoxes'
import PlayAll from './modules/PlayAll'
import PlayFive from './modules/PlayFive'

let mobileMenu = new MobileMenu(
  document.querySelector(".site-header__menu-icon"),
  document.querySelector(".site-header__menu-content"),
  document.querySelector(".site-header")
);

let musicBoxes = new MusicBoxes(
  document.getElementsByClassName("music-box-item"),
  document.getElementsByClassName("music-box-item__photo")
);

let playAll = new PlayAll(
  document.getElementsByTagName("AUDIO"),
  document.getElementById('play-all-btn')
);

let playFive = new PlayFive(
  document.getElementsByTagName("AUDIO"),
  document.getElementById('play-five-btn')
);


if (module.hot) {
    module.hot.accept()
}
