import { draw, setup } from "@lib/chaos/lorenzAttractor/sketch";
import { NextPage } from "next";
import dynamic from "next/dynamic";

const Sketch = dynamic(import("react-p5"), { ssr: false });

const LorenzAttractor: NextPage = () => {
  return <Sketch setup={setup} draw={draw} />;
};

export default LorenzAttractor;
