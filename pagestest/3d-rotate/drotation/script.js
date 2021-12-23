const card = document.querySelector('.card');

function clickRotate() {
  card.classList.toggle('rotated');
}
card.addEventListener('click', clickRotate);


// Uncomment the rest of the JS to enable click and drag to rotate.
// It is pretty buggy so I left it disabled to leave focus on the 3D CSS animation.

/*

// isDown is a flag to check if the mouse is down whe running a function
// startX will represent where the mouse was on the card when the drag started
let isDown = false; 
let startX;

// set isDown to true, set value of for where the mouse started
function startRotation(e) {
  isDown = true;
  startX = e.pageX - this.offsetLeft;
}

// function to stop the rotation
function stopRotation(e) {
  isDown = false;
}

function dragRotate(e) {
  if(!isDown) return; // if mouse is not down, exit function 
  e.preventDefault();
  
  // get value for how much the mouse has moved 
  // dividing by two here just to slow it down a bit
  const movement = (e.pageX - this.offsetLeft - startX) / 2;
  
  // set rotation value using template literal
  this.style.transform = `rotateY(${movement}deg)`;
}

// event listeners 
card.addEventListener('click', clickRotate);
card.addEventListener('mousedown', startRotation);
card.addEventListener('mouseleave', stopRotation);
card.addEventListener('mouseup', stopRotation);
card.addEventListener('mousemove', dragRotate);

*/