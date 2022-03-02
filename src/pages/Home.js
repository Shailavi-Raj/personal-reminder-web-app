import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import Appbar from "./Appbar";

const Home = () => {
  return (
    <div className="home">
      <StyledEngineProvider injectFirst>
        <Appbar />
      </StyledEngineProvider>
      ,
    </div>
  );
};

export default Home;
