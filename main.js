const characterId = 'robot', moveTime = 1000;
const sprite = {
  charSizeX: 100,
  charSizeY: 100,
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
  size: 500,
  unit: 100,
  characterPosition: {
    x: 0,
    y: 0
  }
};

/**
 * Animates walking movement in any direction
 */
const animate = () => {
  if(sprite.currentXPosition === (sprite.stepsX + 1)) {
    sprite.currentXPosition = 0;
  }
  document.getElementById(characterId).style.backgroundPosition = `-${sprite.charSizeX * sprite.currentXPosition}px -${sprite.charSizeY * sprite.currentYPosition}px`;
  sprite.currentXPosition++;
};

/**
 * Moves character by 1 unit in specified direction
 * @param {string} direction One of the directions in sprite directions
 * 
 */
const move = direction => {
  if(!Object.keys(sprite.directions).includes(direction)) {
    throw new Error('Invalid control direction configuration');
  }
  sprite.currentYPosition = sprite.directions[direction];
  const directionToStyleMap = {
    north: {
      increment: -1,
      style: 'top',
      axis: 'y'
    },
    south: {
      increment: 1,
      style: 'top',
      axis: 'y'
    },
    east: {
      increment: 1,
      style: 'left',
      axis: 'x'
    },
    west: {
      increment: -1,
      style: 'left',
      axis: 'x'
    }
  }

  const newOffsetPosition = grid.characterPosition[directionToStyleMap[direction].axis] + directionToStyleMap[direction].increment * 100;
  if(newOffsetPosition >= 0 && newOffsetPosition <= grid.size - grid.unit) {
    const animeInterval = setInterval(animate, 100);
    document.getElementById(characterId).style[directionToStyleMap[direction].style] = `${newOffsetPosition}px`;
    grid.characterPosition[directionToStyleMap[direction].axis] = newOffsetPosition;
    setTimeout(() => clearInterval(animeInterval), moveTime);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.getElementsByTagName('button');
  [...buttons].forEach(button => {
    button.onclick = () => {
      move(button.dataset.controlDirection);
    }
  });
}, false);
