const buttonPlay = document.querySelector(".play");
const buttonPause = document.querySelector(".pause");
const buttonStop = document.querySelector(".stop");
const buttonSet = document.querySelector(".set");
const buttonSoundOn = document.querySelector(".sound-on");
const buttonSoundOff = document.querySelector(".sound-off");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
const pointer = document.querySelector(".pointer");

let defaultMinutes = 25;

function countDown() {
  setTimeout(() => {
    let seconds = Number(secondsDisplay.textContent);
    let minutes = Number(minutesDisplay.textContent);
    if (seconds <= 0) {
      seconds = 5;

      if (minutes <= 0) {
        buttonPlay.classList.remove("hide");
        buttonPause.classList.add("hide");
        buttonStop.classList.add("hide");
        buttonSet.classList.remove("hide");
        pointer.classList.remove("pointerAnimation");
        minutesDisplay.textContent = String(defaultMinutes).padStart(2, "0");
        return;
      }
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0");
    }
    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

    countDown();
  }, 1000);
}

buttonPlay.addEventListener("click", () => {
  buttonPlay.classList.add("hide");
  buttonPause.classList.remove("hide");
  buttonSet.classList.add("hide");
  buttonStop.classList.remove("hide");
  pointer.classList.add("pointerAnimation");
  countDown();
});
buttonPause.addEventListener("click", () => {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  pointer.classList.remove("pointerAnimation");
});
buttonStop.addEventListener("click", () => {
  buttonPlay.classList.remove("hide");
  buttonPause.classList.add("hide");
  buttonStop.classList.add("hide");
  buttonSet.classList.remove("hide");
  pointer.classList.remove("pointerAnimation");
});
buttonSoundOn.addEventListener("click", () => {
  buttonSoundOff.classList.remove("hide");
  buttonSoundOn.classList.add("hide");
});
buttonSoundOff.addEventListener("click", () => {
  buttonSoundOff.classList.add("hide");
  buttonSoundOn.classList.remove("hide");
});
buttonSet.addEventListener("click", () => {
  defaultMinutes = prompt("Quantos Minutos?");
  minutesDisplay.textContent = String(defaultMinutes).padStart(2, "0");
});
