const TIME_INTERVAL = 5;

window.onload = init;

function init() {
  const circle = {svg:null, x:0, y:0, r:16, v_x:40, v_y: 40};
  createCircle(circle);
  let s = setInterval(simulate, TIME_INTERVAL, circle);
}

function simulate(circle) {
  //for now, move the circle with constant velocity
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
