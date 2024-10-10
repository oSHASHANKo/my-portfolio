import { useState } from "react";
import { Header } from "./components/Header/Header";
import { MainContent } from "./components/MainContent/MainContent";
import { Footer } from "./components/Footer/Footer";

function App() {

  return (
    <div className="page-container">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </div>
  );
}

export default App;
