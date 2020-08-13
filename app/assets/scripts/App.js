import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/mobilemenu'
import MusicBoxes from './modules/musicplayer'
import PlayAll from './modules/playallbtn'
import PlayFive from './modules/playfivebtn'

let mobileMenu = new MobileMenu();
let musicBoxes = new MusicBoxes();
let playAll = new PlayAll();
let playFive = new PlayFive();


if (module.hot) {
    module.hot.accept()
}