const TIME_INTERVAL = 5;

window.onload = init;

function init() {
  //velocities are in pixels per second
  const circle = {svg:null, x:16, y:16, r:16, v_x:0, v_y: 0, a_x:20, a_y:20};
  createCircle(circle);
  let s = setInterval(simulate, TIME_INTERVAL, circle);
}

function simulate(circle) {
  //update velocity based on acceleration
  circle.v_x += (circle.a_x * (TIME_INTERVAL / 1000));
  circle.v_y += (circle.a_y * (TIME_INTERVAL / 1000));
  //update position based on velocity
  circle.x += (circle.v_x * (TIME_INTERVAL / 1000));
  circle.y += (circle.v_y * (TIME_INTERVAL / 1000));
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
