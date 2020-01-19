import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar.js";
// import Home from "./Components/Views/Home.js";
import Recipes from "./Components/Views/Recipes.js";
import RecipeDetail from "./Components/Views/RecipeDetail.js";
import Videos from "./Components/Views/Videos.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <h1 className="page-name">My Recipes</h1>
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route exact path="/" component={Recipes} />
          <Route exact path="/recipe/:id" component={RecipeDetail} />
          <Route exact path="/videos" component={Videos} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
