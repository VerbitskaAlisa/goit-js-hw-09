const t={body:document.querySelector("body"),startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]")};let e=null;t.startBtn.addEventListener("click",(function(){t.stopBtn.hasAttribute("disabled")&&t.stopBtn.removeAttribute("disabled");t.startBtn.setAttribute("disabled",!0),e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.stopBtn.addEventListener("click",(function(){t.startBtn.hasAttribute("disabled")&&t.startBtn.removeAttribute("disabled");t.stopBtn.setAttribute("disabled",!0),clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.290f9dea.js.map
