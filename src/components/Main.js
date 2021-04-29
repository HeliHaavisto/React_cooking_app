import React, { useState, useEffect } from "react";
import Home from "../pages/Home";
import Recipes from "../pages/Recipes";
import About from "../pages/About";
import AddRecipe from "../pages/AddRecipe";
import axios from "axios";
import { Switch, Route } from "react-router-dom";

const Main = () => {
    const [newRecipe, setNewRecipe] = useState({
        name: "",
        description: "",
        image: "",
        recipeIngredient: [],
        recipeInstructions: [{}, {}, {}],
    });

    const valueChangeHandler = (e) => {
        setNewRecipe({
            ...newRecipe, [e.target.name]: e.target.value
        });
    }

    const submitRecipe = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3001/recipes", newRecipe)
            .then(() => {
                return axios.get("http://localhost:3001/recipes");
            })
            .then((res) => setNewRecipe(res.data));
        e.target.reset();
    };

    return (
        <div id="main">
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/recipes" component={Recipes}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/addrecipe" component={AddRecipe}>
                    <AddRecipe change={valueChangeHandler} submit={submitRecipe} />
                </Route>
            </Switch>
        </div>
    );
};

export default Main;
