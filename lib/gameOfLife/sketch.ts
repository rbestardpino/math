import p5Type from "p5";
import { config, updateConfig } from "./config";
import { CELL_SIZE, COLS, ROWS } from "./consts";
import { createMatrix, getCellsToChangeState } from "./utils";

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  updateConfig({
    frameRate: 10,
    play: false,
    grid: createMatrix<boolean>(COLS, ROWS, () => false),
  });
  p5.createCanvas(COLS * CELL_SIZE, ROWS * CELL_SIZE).parent(canvasParentRef);
};

export const draw = (p5: p5Type): void => {
  p5.background(0);
  p5.frameRate(config.frameRate);

  paintGrid(p5);

  if (!config.play) return;

  const cellsToChangeState = getCellsToChangeState(config.grid);
  cellsToChangeState.forEach((cell) => {
    config.grid[cell.x][cell.y] = !config.grid[cell.x][cell.y];
  });

  paintGrid(p5);
};

export const mouseClicked = (p5: p5Type): void => {
  if (
    p5.mouseX > p5.width ||
    p5.mouseY > p5.height ||
    p5.mouseX < 0 ||
    p5.mouseY < 0
  )
    return;
  let col = p5.floor(p5.mouseX / CELL_SIZE);
  let row = p5.floor(p5.mouseY / CELL_SIZE);
  config.grid[col][row] = !config.grid[col][row];
};

function paintGrid(p5: p5Type) {
  config.grid.forEach((col, indexY) =>
    col.forEach((cell, indexX) => {
      const x = indexY * CELL_SIZE;
      const y = indexX * CELL_SIZE;
      p5.stroke(0, 255, 100, 100);
      if (!cell) {
        p5.fill(255);
      } else {
        p5.fill(0);
      }
      p5.rect(x, y, CELL_SIZE - 1, CELL_SIZE - 1);
    })
  );
}
