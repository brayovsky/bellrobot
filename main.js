// all sprite properties
const sprite = {
  offsetX: 100,
  offsetY: 100,
  stepsX: 6,
  currentXPosition: 0,
  currentYPosition: 0,
  positions: {
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

const animate = () => {
  if(sprite.currentXPosition === (sprite.stepsX + 1)) {
    sprite.currentXPosition = 0;
  }
  document.getElementById('robot').style.backgroundPosition = `-${sprite.offsetX * sprite.currentXPosition}px -${sprite.offsetY * sprite.currentYPosition}px`;
  sprite.currentXPosition++;
};

const animeInterval = setInterval(animate, 100);

/**
 * 
 * @param {string} direction
 * @param {number} offset 
 */
const move = (direction) => {
  sprite.currentYPosition = sprite.positions[direction];
};

document.addEventListener('DOMContentLoaded', () => { 
  const buttons = document.getElementsByTagName('button');
  console.log(buttons);
  [...buttons].forEach(button => {
    button.onclick = () => {
      move(button.dataset.controlDirection);
    }
  });
}, false);
