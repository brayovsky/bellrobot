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
}

const animate = () => {
  if(sprite.currentXPosition === (sprite.stepsX + 1)) {
    sprite.currentXPosition = 0;
  }
  document.getElementById('robot').style.backgroundPosition = `-${sprite.offsetX * sprite.currentXPosition}px ${sprite.currentYPosition}`;
  sprite.currentXPosition++;
};

const animeInterval = setInterval(animate, 100);
