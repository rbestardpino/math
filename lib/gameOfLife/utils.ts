import { COLS, ROWS } from "./consts";

export function createMatrix<T>(cols: number, rows: number, filler: () => T) {
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

export function getCellsToChangeState(grid: boolean[][]) {
  let cellsToChange: { x: number; y: number }[] = [];
  grid.forEach((col, indexX) =>
    col.forEach((cell, indexY) => {
      const neighbors = countNeighbors(grid, indexX, indexY);

      if (!cell && neighbors === 3) {
        cellsToChange.push({ x: indexX, y: indexY });
      } else if (cell && (neighbors < 2 || neighbors > 3)) {
        cellsToChange.push({ x: indexX, y: indexY });
      }
    })
  );

  return cellsToChange;
}

function countNeighbors(grid: boolean[][], x: number, y: number) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + COLS) % COLS;
      let row = (y + j + ROWS) % ROWS;
      sum += grid[col][row] ? 1 : 0;
    }
  }
  sum -= grid[x][y] ? 1 : 0;
  return sum;
}
