import { useState } from "react";
import reactLogo from "./assets/react.svg";


import Navbar from "./components/navbar/Navbar";
import Character from "./components/character/Character";

function App() {
  return (
      <div>
        <Navbar />
        <main className="container mx-auto my-10">
          <Character/>
        </main>
      </div>
  );
}

export default App;
