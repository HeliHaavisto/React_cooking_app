import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from "../components/RecipeCard";
import SingleRecipe from "../components/SingleRecipe";
import AddRecipe from "../pages/AddRecipe";
import { Switch, Route } from 'react-router-dom';

const SearchBox = ({ search }) => {
    return (
        <div >
            <input type="text" className="searchBox" onChange={search} placeholder="Search recipes"></input>
        </div>
    );
};

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchInput, setSearchInput] = useState("");


    const searchValueHandler = (event) => {
        setSearchInput(event.target.value);
    };

    useEffect(() => {
        axios
            .get("http://localhost:3001/recipes")
            .then((res => setRecipes(res.data)));
    }, []);



    const recipeFilter = recipes.filter((recipe) => {
        return recipe.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase());
    });

    const recipesList = recipeFilter.map((recipe) => { return (<RecipeCard name={recipe.name} key={recipe.id} image={recipe.image} description={recipe.description} recipeIngredient={recipe.recipeIngredient} recipeInstructions={recipe.recipeInstructions} link={recipe.id} />) });

    return (
        <div className="recipes">
            <Switch>
                <Route path="/:recipes" exact>
                    <div className="card2">
                        <section id="pins">
                            <div className="pin"></div>
                            <div className="pin"></div>
                        </section>
                        <h1>Recipe page</h1>
                        <SearchBox search={searchValueHandler} />
                    </div>
                    <div>
                        {recipesList}
                    </div>
                </Route>
                <Route path="/recipes/:id">
                    <SingleRecipe />

                </Route>

            </Switch>
        </div >
    );
};

export default Recipes;