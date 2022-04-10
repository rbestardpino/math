import { draw, mouseClicked, setup } from "@lib/p5/sketch";
import { Container } from "@mui/material";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Sketch = dynamic(import("react-p5"), { ssr: false });

const Home: NextPage = () => {
  return (
    <Container sx={{ my: 6 }}>
      <Sketch setup={setup} draw={draw} mouseClicked={mouseClicked} />
    </Container>
  );
};

export default Home;

