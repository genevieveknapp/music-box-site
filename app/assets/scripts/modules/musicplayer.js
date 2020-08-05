class MusicBoxes {
    constructor() {
        this.musicBoxesAll = document.getElementsByClassName("music-box-item")
        this.musicBoxPhotosAll = document.getElementsByClassName("music-box-item__photo")
        this.musicBoxDivAndPhotos = new Array(this.musicBoxesAll, this.musicBoxPhotosAll)
        this.playPause
        this.events()
    }

    events() {
        for (let i = 0; i < this.musicBoxesAll.length; i+=1) {
            this.musicBoxesAll[i].addEventListener("click", function() {
                this.classList.toggle("music-box-item__animation-is-running")
                this.childNodes[1].classList.toggle("music-box-item__animation-is-running")
                if (this.playPause == 1) {
                    this.childNodes[3].load()
                    this.playPause = 0;
                } else {
                    this.childNodes[3].play()
                    this.playPause = 1;
                }
            });
        }
    }

}

export default MusicBoxes;