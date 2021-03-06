var maxElements = 250;
var duration = 2500;
var toAnimate = [];
var radius = window.innerWidth < window.innerHeight ? window.innerWidth : window.innerHeight;
var distance = radius / 3 <= 150 ? 150 : radius / 3; 
var colors = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C'];

var createElements = (function() {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < maxElements; i++) {
    var el = document.createElement('div');
    el.classList.add('particule');
    el.style.color = colors[anime.random(0, 3)];
    el.style.zIndex = maxElements - i;
    toAnimate.push(el);
    fragment.appendChild(el);
  }
  document.body.appendChild(fragment);
})();

var animate = function(el, i) {
  var angle = Math.random() * Math.PI * 2;
  anime({
    targets: el,
    translateX: [0, Math.cos(angle) * distance],
    translateY: [0, Math.sin(angle) * distance],
    scale: [3, 0],
    delay: (duration / maxElements) * i,
    duration: duration,
    easing: 'easeOutSine',
    loop: true
  });
}

toAnimate.forEach(animate);