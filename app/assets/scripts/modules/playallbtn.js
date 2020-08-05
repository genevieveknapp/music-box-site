class PlayAll {
    constructor() {
        this.audioFiles = document.getElementsByTagName("AUDIO")
        this.playAllBtn = document.getElementById('play-all-btn')
        this.events()
    }

    events() {
        this.playAllBtn.addEventListener("click", () => this.playAll())
    }

    playAll(){
        this.playAllBtn.classList.toggle("btn__animation-is-running");
        if (this.playPause2 == 1) {
                for (let i = 0; i < this.audioFiles.length; i+=1) {
                    this.audioFiles[i].load()
                 }
                 this.playPause2 = 0;
                 this.playAllBtn.innerHTML = "Play All 20";
            } else {
                    for (let x = 0; x < this.audioFiles.length; x+=1) {
                        this.audioFiles[x].play()
                    }
                    this.playPause2 = 1;
                    this.playAllBtn.innerHTML = "Stop All";
                }
            }
}

export default PlayAll