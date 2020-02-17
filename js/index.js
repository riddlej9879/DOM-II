// Your code goes here



// Timers added to most events so the webpage doesnt have to be refreshed
// after each even has been triggered

// Changes the color of the nav items temporarily
let navFlash = document.querySelectorAll('nav a');
navFlash.forEach((element) => {
  element.addEventListener('mouseover', (event) => {
    event.target.style.color = "red";
    setTimeout(function () {
      event.target.style.color = "";
    }, 1000);
  })
});

// Turns the fun-bus.jpg image to opaque by 50%
let imgFade = document.querySelector('.fun-bus');
imgFade.addEventListener('dblclick', (event) => {
  imgFade.classList.toggle('opaque');
});

// Flips the boat image left to right
let imgFlip = document.querySelector('.destination-img');
imgFlip.addEventListener('mouseenter', (event) => {
  imgFlip.classList.toggle('flip');
});

// Disables the context menu on the top paragraph
noContext = document.querySelector('.noContextMenu');
noContext.addEventListener('contextmenu', event => {
  event.preventDefault();
});

// Changes headers to red when it is clicked on
let changeColor = document.querySelectorAll('h2');
changeColor.forEach((element) => {
  element.addEventListener('mousedown', (event) => {
    event.target.style.color = 'red';
  });
});

// Changes headers to their original color when the mouse button is released
changeColor.forEach((element) => {
  element.addEventListener('mouseup', (event) => {
    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  });
});

// Changes the color of top <p> when clicking the non-primary mouse button
let newColor = document.querySelector('.noContextMenu');
newColor.onauxclick = function (event) {
  event.target.style.color = "red";
  setTimeout(function () {
    event.target.style.color = "";
  }, 1500);
};

// Text cut from the top box is turned uppercase
let source = document.querySelector('div.source');
source.addEventListener('cut', (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
  selection.deleteFromDocument();
  event.preventDefault();
});

// Text cut from the top box is turned lowercase
let target = document.querySelector('div.target');
target.addEventListener('cut', (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData('text/plain', selection.toString().toLowerCase());
  selection.deleteFromDocument();
  event.preventDefault();
});

// When pasting into the bottom box the text is turned red
target.addEventListener('paste', (event) => {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  paste = event.target.style.color = 'red';
});

// Copied text remains unchanged
source.addEventListener('copy', (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData('text/plain', selection.toString());
  selection.deleteFromDocument();
  event.preventDefault();
});