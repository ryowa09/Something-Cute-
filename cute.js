const gifSticker = document.getElementById("gifSticker");
const askText = document.getElementById("question");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let messages = [
    "Pleaseeeee?",
    "I'm begging youuuu!",
    "Pretty please?",
    "It will be the best date ever",
    "Please say yes!",
    "Don't say no again!",
    "You're breaking my heart </3",
    "I promise it will be fun!",
    "I will make it up to you!",
    "I will buy you ice cream!",
    "I will take you to the movies!",
    "I will take you to dinner!",
    "I will take you to the park!",
    "Just say yes!",
    "I will be sad if you say no"
];

let yesGif = "src/yesgif.gif";
let noGif = "src/nogif.gif";

let numCount = 0;

noBtn.addEventListener("click", () => {
    if (numCount < messages.length) {
        askText.textContent = messages[numCount];
    }
    else {
        askText.textContent = "Fine, I won't ask again...";
    }

    let newSize = 18 + numCount * 10;
    yesBtn.style.fontSize = `${newSize}px`;
    
    gifSticker.src = noGif;

    numCount++;
});

yesBtn.addEventListener("click", () => {
    askText.textContent = "YAY! Can't wait!";
    gifSticker.src = yesGif;
    yesBtn.style.fontSize = "15px";
    numCount = 0;
});