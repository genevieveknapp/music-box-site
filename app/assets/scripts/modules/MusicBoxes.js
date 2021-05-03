export default class MusicBoxes {
    constructor(boxes, photos) {
        this.boxes = boxes
        this.photos = photos
        this.musicBoxDivAndPhotos = new Array(this.boxes, this.photos)
        this.playPause
        this.events()
    }

    events() {
        for (let i = 0; i < this.boxes.length; i+=1) {
            this.boxes[i].addEventListener("click", function() {
                this.classList.toggle("music-box-item__animation-is-running")
                this.childNodes[1].classList.toggle("music-box-item__animation-is-running")
                if (this.playPause == 1) {
                    this.childNodes[1].load()
                    this.playPause = 0;
                } else {
                    this.childNodes[1].play()
                    this.playPause = 1;
                }
            });
        }
    }

}

