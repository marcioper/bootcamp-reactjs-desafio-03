import React from "react";
import Loader from "react-loader-spinner";

import { Container } from "./styles";

const Loading = () => (
  <Container>
    <Loader type="Plane" color="#00BFFF" height={80} width={80} />
  </Container>
);

export default Loading;
