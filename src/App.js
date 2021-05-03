import Menu from "./Components/main/Menu";
import Project from "./Components/main/Project";
import Presentation from "./Components/main/Presentation";
import Home from "./Components/main/Home";
import Contact from "./Components/main/Contact";
import { HashRouter, Route, Switch } from "react-router-dom";
import Other from "./Components/main/Other";
import Detail from "./Components/data/ProjectDetails";

function App() {
  return (
    <HashRouter>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-5 font-nunito">
        <div className="sm:h-full sm:col-span-1">
          <Menu />
        </div>
        <main className="sm:col-span-2 md:col-span-3 lg:col-span-3 2xl:col-span-4">
          <div className="text-gray-700 m-3 h-full">
            <Switch>
              <Route path="/presentation">
                <Presentation />
              </Route>
              <Route path="/projects">
                <Project />
              </Route>
              <Route path="/project/:id">
                <Detail />
              </Route>
              <Route path="/others">
                <Other />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;
