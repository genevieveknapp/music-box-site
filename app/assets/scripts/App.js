import '../styles/styles.css'
import MobileMenu from './modules/mobilemenu'
import MusicBoxes from './modules/musicplayer'

let mobileMenu = new MobileMenu();
let musicBoxes = new MusicBoxes();



if (module.hot) {
    module.hot.accept()
}