export default class PlayFive {
    constructor(audioFiles, playFiveBtn) {
        this.audioFiles = audioFiles
        this.playFiveBtn = playFiveBtn
        this.events()
        this.getRandomSelection()
    }

    events() {
        this.playFiveBtn.addEventListener("click", () => this.playRandomSelection())
    }

    getRandomSelection() {
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        for (let i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i)
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
          this.selection = [];
          for (let k = 0; k < 5; k+=1) {
              this.selection.push(array[k]);
          }
          return this.selection;
    }

    playRandomSelection() {
        this.playFiveBtn.classList.toggle("btn__animation-is-running");
        if (this.playPause3 == 1) {
            for (let i = 0; i < this.selection.length; i+=1) {
                this.audioFiles[this.selection[i]].load()
            }
            this.getRandomSelection();
            this.playPause3 = 0;
            this.playFiveBtn.innerHTML = "Play Five Random";
        } else {
            for (let x = 0; x < this.selection.length; x+=1) {
                this.audioFiles[this.selection[x]].play()
            }
            this.playPause3 = 1;
            this.playFiveBtn.innerHTML = "Stop Five Random";
        }
    }

}
