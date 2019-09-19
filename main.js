const sprite = {
  offsetX: 100,
  offsetY: 100,
  stepsX: 6,
  currentXPosition: 0,
  currentYPosition: 0,
  directions: {
    south: 0,
    north: 1,
    east: 2,
    west: 3
  }
};

const grid = {
  stepsX: 4,
  stepsY: 4
}

/**
 * Animates walking movement
 */
const animate = () => {
  if(sprite.currentXPosition === (sprite.stepsX + 1)) {
    sprite.currentXPosition = 0;
  }
  document.getElementById('robot').style.backgroundPosition = `-${sprite.offsetX * sprite.currentXPosition}px -${sprite.offsetY * sprite.currentYPosition}px`;
  sprite.currentXPosition++;
};
const animeInterval = setInterval(animate, 100);

/**
 * Shifts direction of movement
 * @param {string} direction One of the directions in sprite directions
 * 
 */
const move = direction => {
  if(!Object.keys(sprite.directions).includes(direction)) {
    throw new Error('Invalid control direction configuration');
  }
  sprite.currentYPosition = sprite.directions[direction];
};

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.getElementsByTagName('button');
  [...buttons].forEach(button => {
    button.onclick = () => {
      move(button.dataset.controlDirection);
    }
  });
}, false);
