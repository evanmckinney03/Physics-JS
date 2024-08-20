const TIME_INTERVAL = 5;
const G = 60;

window.onload = init;

function init() {
  //velocities are in pixels per second
  const circle = {svg:null, x:16, y:16, r:16, v_x:0, v_y: 0, a_x:0, a_y:G};
  createCircle(circle);
  let svg = document.getElementById('svg');
  let bounds = [[0, svg.getAttribute('width')],[0, svg.getAttribute('height')]];
  let s = setInterval(simulate, TIME_INTERVAL, circle, bounds);
}

function simulate(circle, bounds) {
  //update velocity based on acceleration
  circle.v_x += (circle.a_x * (TIME_INTERVAL / 1000));
  circle.v_y += (circle.a_y * (TIME_INTERVAL / 1000));
  //update position based on velocity
  circle.x += (circle.v_x * (TIME_INTERVAL / 1000));
  circle.y += (circle.v_y * (TIME_INTERVAL / 1000));
  //check if it hits the floor
  //for now, make it completely stop once it hits the floor
  if(circle.y > bounds[1][1] - circle.r) {
    circle.v_y = 0;
    circle.a_y = 0;
  }
  circle.svg.setAttribute('cx', circle.x);
  circle.svg.setAttribute('cy', circle.y);
}

function createCircle(circle) {
  let svg = document.getElementById('svg');
  let circleSVG = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circleSVG.setAttribute('id', 'circle');
  circleSVG.setAttribute('class', 'circle');
  circleSVG.setAttribute('r', circle.r);
  circleSVG.setAttribute('cx', circle.x);
  circleSVG.setAttribute('cy', circle.y);
  svg.appendChild(circleSVG);
  circle.svg = circleSVG;
}
