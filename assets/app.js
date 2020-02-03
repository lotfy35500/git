var windows = this;

let h1 = document.querySelector('h1');
if(h1) {
  let text = h1.innerHTML;
  animateText(h1, text);
}

function animateText(el, text) {
  el.innerHTML = '';
  for (var i = 0; i< text.length; i++) {
    const lettre = text[i]
    setTimeout(function() {
      el.innerHTML += lettre;

    },i*300);
  }
}