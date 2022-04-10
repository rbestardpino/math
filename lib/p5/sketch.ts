import type p5Type from "p5";

function createMatrix<T>(cols: number, rows: number, filler: () => T) {
  let arr: T[][] = [];
  for (let i = 0; i < cols; i++) {
    let row: T[] = [];
    for (let j = 0; j < rows; j++) {
      row[j] = filler();
    }
    arr[i] = row;
  }
  return arr;
}

let grid: boolean[][];
let cols: number;
let rows: number;
const CELL_SIZE = 20;
let play: boolean;

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(500, 500).parent(canvasParentRef);
  p5.frameRate(10);
  cols = p5.width / CELL_SIZE;
  rows = p5.height / CELL_SIZE;
  grid = createMatrix<boolean>(cols, rows, () => false);
  play = false;
};

export const draw = (p5: p5Type): void => {
  p5.background(0);
  p5.createButton("Start/Stop simulation")
    .mousePressed(() => {
      play = !play;
    })
    .position(10, 10);

  paintGrid();

  if (!play) return;

  const cellsToChangeState = getCellsToChangeState();
  cellsToChangeState.forEach((cell) => {
    grid[cell.x][cell.y] = !grid[cell.x][cell.y];
  });

  paintGrid();

  function paintGrid() {
    grid.forEach((col, indexY) =>
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
  grid[col][row] = !grid[col][row];
};

function countNeighbors(x: number, y: number) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row] ? 1 : 0;
    }
  }
  sum -= grid[x][y] ? 1 : 0;
  return sum;
}

function getCellsToChangeState(): { x: number; y: number }[] {
  let cellsToChange: { x: number; y: number }[] = [];
  grid.forEach((col, indexX) =>
    col.forEach((cell, indexY) => {
      const neighbors = countNeighbors(indexX, indexY);

      if (!cell && neighbors === 3) {
        cellsToChange.push({ x: indexX, y: indexY });
      } else if (cell && (neighbors < 2 || neighbors > 3)) {
        cellsToChange.push({ x: indexX, y: indexY });
      }
    })
  );

  return cellsToChange;
}
