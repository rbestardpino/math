import { draw, mouseClicked, setup } from "@lib/p5/gameOfLife";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Sketch = dynamic(import("react-p5"), { ssr: false });

const GameOfLife: NextPage = () => {
  return <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />;
};

export default GameOfLife;
