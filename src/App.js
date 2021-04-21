import Presentation from "./Components/main/Presentation";
import Project from "./Components/main/Project";
import { motion } from "framer-motion";
import { HashRouter, Link, Route } from "react-router-dom";
import Other from "./Components/main/Other";

function App() {
  return (
    <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-5 font-nunito">
      {/* Toute la partie Gauche */}
      <div className="h-screen sm:col-span-1">
        <Presentation />
      </div>
      {/* Toute la partie Droite */}
      <main className="sm:col-span-2 md:col-span-3 lg:col-span-3 2xl:col-span-4">
        {/* Partie supérieure de la partie droite */}
        <div>
          <Project />
        </div>
        {/* Partie inférieure de la partie droite */}
        <div>
          <Other />
        </div>
      </main>
    </div>
  );
}

export default App;
