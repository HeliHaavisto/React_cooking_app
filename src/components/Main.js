import React from "react";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import AddRecipe from "../pages/AddRecipe";
import { Switch, Route } from "react-router-dom";

const Main = () => {
    return (
        <div id="main">
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/recipes" component={Recipes}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/addrecipe" component={AddRecipe}></Route>
            </Switch>
        </div>
    );
};

export default Main;
