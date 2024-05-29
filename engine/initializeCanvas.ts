import IGameData from "./types/IGameData"

const initializeCanvas = (data: IGameData, gameWidth: number, gameHeight: number): void => {
  const window = document.querySelector<HTMLDivElement>('#app')!
  window!.innerHTML = `
  <canvas width='${gameWidth}' height='${gameHeight}' style='width: ${gameWidth}px; height: ${gameHeight}px; background-color: #242424; margin: 0 auto;'>
    
  </canvas>
`
  window.style.width = `${gameWidth}px`
  window.style.height = `${gameHeight}px`
  const canvas = document.querySelector<HTMLCanvasElement>('canvas') as HTMLCanvasElement
  data.canvas = canvas
  data.canvasContext = canvas.getContext('2d') as CanvasRenderingContext2D
}

export default initializeCanvas