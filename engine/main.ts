import './styles/style.css'
import initializeCanvas from './initializeCanvas';
import { degreesToRadians } from './util';
import rayCaster from './rayCaster';
import initializeMovement from './InitializeMovement';
import initializeTextures from './initializeTextures';
import { initializeBuffer, renderBuffer } from './renderUtils';
import movementHandler from './movementHandler';

const gameWidth = 640;
const gameHeight = 480;

const map = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,2,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,3,0,0,0,3,0,0,0,1],
  [1,0,0,0,0,0,2,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,2,2,0,2,2,0,0,0,0,3,0,3,0,3,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,5,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
]



const data = {
  screenWidth: gameWidth,
  screenHeight: gameHeight,
  // FOV of the player in radians
  fov: degreesToRadians(66),
  // Indexes of the map grid, corresponding to the player's position
  position:{
    x: 19,
    y: 12
  },
  // Vector holding information, about the direction towards which the player is looking. The width of the vector is non relevant.
  direction:{
    x: -1,
    y: 0
  },
  // The "camera plane" - vector perpendicular to the direction, whose length is the distance from the middle to the edge of the screen
  plane:{
    x: 0,
    y: (Math.tan(degreesToRadians(66/2)))
  },
  frameRate: 1000/60,
  canvas: null,
  canvasContext: null,
  map: map,
  textures: null,
  renderData:{
    imageData: null,
    buffer: null,
  },
  pressedKeys: null
}

// Disable/Enable movement at will
let movementPaused = false
const toggleMovement = () => {
  movementPaused = !movementPaused; 
}

const startEngine =  () => {
  initializeCanvas(data, gameWidth, gameHeight)
  initializeBuffer(data)
  initializeTextures(data)
  initializeMovement(data)
  
  // Main loop
  const gameLoop = () => {
    (data.canvasContext as unknown as CanvasRenderingContext2D).clearRect(0, 0, data.screenWidth, data.screenHeight);
    rayCaster(data)
    renderBuffer(data)
    if(!movementPaused) movementHandler(data)
  }
  return setInterval(gameLoop, data.frameRate)
}



export {startEngine, toggleMovement};