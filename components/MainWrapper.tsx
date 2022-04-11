import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Container from "@mui/material/Container";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
  fallback?: ReactElement;
}

export default function MainWrapper(props: Props) {
  return (
    <>
      <Navbar />
      <Container sx={{ my: 3 }}>{props.children}</Container>
      <Footer />
    </>
  );
}
