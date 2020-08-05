class PlayFive {
    constructor() {
        this.audioFiles3 = document.getElementsByTagName("AUDIO")
        this.playFiveBtn = document.getElementById('play-five-btn')
        this.events()
        this.getRandom()
    }

    events() {
        this.playFiveBtn.addEventListener("click", () => this.playRandom())
    }

    getRandom() {
        let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        for (let i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * i)
            var temp = array[i]
            array[i] = array[j]
            array[j] = temp
          }
          this.arrayFive = [];
          for (let k = 0; k < 5; k+=1) {
              this.arrayFive.push(array[k]);
          }
          return this.arrayFive;
    }

    playRandom() {
        this.playFiveBtn.classList.toggle("btn__animation-is-running");
        if (this.playPause3 == 1) {
            for (let i = 0; i < this.arrayFive.length; i+=1) {
                this.audioFiles3[this.arrayFive[i]].load()
            }
            this.getRandom();
            this.playPause3 = 0;
            this.playFiveBtn.innerHTML = "Play Five Random";
        } else {
            for (let x = 0; x < this.arrayFive.length; x+=1) {
                this.audioFiles3[this.arrayFive[x]].play()
            }
            this.playPause3 = 1;
            this.playFiveBtn.innerHTML = "Stop Five Random";
        }
    }

}
export default PlayFive