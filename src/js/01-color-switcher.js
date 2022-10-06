

const refs = {
    body: document.querySelector("body"),
    startBtn: document.querySelector("button[data-start]"),
    stopBtn: document.querySelector("button[data-stop]"),
}

let timerId = null;

refs.startBtn.addEventListener("click", onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick () {
    if(refs.stopBtn.hasAttribute("disabled")) {
        refs.stopBtn.removeAttribute('disabled')
    };
    refs.startBtn.setAttribute("disabled", true);
    timerId = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopBtnClick () {
    if(refs.startBtn.hasAttribute("disabled")) {
        refs.startBtn.removeAttribute('disabled')
    };
    refs.stopBtn.setAttribute("disabled", true);
    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }