console.log('This site was generated by Hugo.');

var quotes = [
  "I breathe, and the world breathes with me.",
  "Let me be enemy to the noose and the fading will.",
  "The desert cannot drown the ocean.",
  "Held aloft, safe at last.",
  "You can be force fed war and spit peace.",
  "Time breeds only decay."
];

window.addEventListener('load', () => {
  let q = quotes[Math.floor(Math.random() * quotes.length)];

  let p = document.querySelector("#quote");

  p.innerHTML = q;
});

