import type p5Type from "p5";

let x: number;
let y: number;
let z: number;

const dt = 0.008;
let sigma: number;
let ro: number;
let beta: number;

let points: {
  hu: number;
  vector: p5Type.Vector;
}[];

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(800, 600, p5.WEBGL).parent(canvasParentRef);
  p5.colorMode(p5.HSB);

  x = 0.01;
  y = 0;
  z = 0;

  sigma = 10;
  ro = 28;
  beta = 8.0 / 3.0;

  points = [];
};

export const draw = (p5: p5Type): void => {
  p5.background(0);
  p5.orbitControl();

  const { x, y, z } = solveOrdinaryDifferentialEquations();

  points.push({ hu: 0, vector: p5.createVector(x, y, z) });

  p5.scale(5);
  p5.noFill();

  p5.stroke(255);
  p5.point(x, y, z);

  let hu = 0;

  p5.beginShape();
  points.forEach((point) => {
    p5.stroke(100, 255, 255);
    p5.vertex(point.vector.x, point.vector.y, point.vector.z);
    if (++hu > 255) {
      hu = 0;
    }
  });
  p5.endShape();
};

function solveOrdinaryDifferentialEquations() {
  let dx = sigma * (y - x) * dt;
  let dy = (x * (ro - z) - y) * dt;
  let dz = (x * y - beta * z) * dt;
  x = x + dx;
  y = y + dy;
  z = z + dz;
  return { x, y, z };
}
