import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeCard from "../components/RecipeCard";
import SingleRecipe from "../components/SingleRecipe";
import AddRecipe from "../pages/AddRecipe";
import { Switch, Route, useRouteMatch } from 'react-router-dom';

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

    let { url } = useRouteMatch();


    const searchValueHandler = (event) => {
        setSearchInput(event.target.value);
    };



    useEffect(() => {
        axios
            // .get("http://localhost:3001/recipes")
            .get("https://intense-journey-32788.herokuapp.com/recipe/all")
            .then((res => setRecipes(res.data)));
    }, []);



    const recipeFilter = recipes.filter((recipe) => {
        return recipe.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase());
    });

    const recipesList = recipeFilter.map((recipe) => { return (<RecipeCard name={recipe.name} key={recipe.id} image={recipe.image} description={recipe.description} recipeIngredient={recipe.recipeIngredient} recipeInstructions={recipe.recipeInstructions} link={recipe.id} />) });

    return (
        <div className="recipes">
            <Switch>
                <Route path={url} exact>
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
                <Route path={`${url}/:id`}>
                    <SingleRecipe />

                </Route>

            </Switch>
        </div >
    );
};

export default Recipes;