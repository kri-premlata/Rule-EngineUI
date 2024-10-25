import React from "react";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div className="">
      <Nav />
      <MainRoutes />
      <Footer />
    </div>
  );
};

export default App;

