'use strict';

const body = document.querySelector('body');
let countClicks = sessionStorage.getItem("counter");
if(!sessionStorage.getItem("counter")) {
    sessionStorage.setItem("counter", 0);
}

body.innerHTML = countClicks;
body.addEventListener("click", amountClicks);


function amountClicks() {
    countClicks++;
    body.innerHTML = countClicks;
    sessionStorage.setItem("counter", countClicks);
}
