import '../styles/styles.css'
import MobileMenu from './modules/mobilemenu'
import MusicBoxes from './modules/musicplayer'
import PlayAll from './modules/playallbtn'

let mobileMenu = new MobileMenu();
let musicBoxes = new MusicBoxes();
let playAll = new PlayAll();



if (module.hot) {
    module.hot.accept()
}