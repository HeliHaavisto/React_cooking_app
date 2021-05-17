import React, { useState, useEffect } from "react";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import AddRecipe from "../pages/AddRecipe";

import { Switch, Route } from "react-router-dom";

const Main = () => {
    return (
        <div id="main">
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/#/recipes" component={Recipes} />
                <Route path="/#/about" component={About} />
                <Route path="/#/addrecipe" component={AddRecipe} />
            </Switch>
        </div>
    );
};

export default Main;
