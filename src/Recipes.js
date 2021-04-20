import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from "./RecipeCard";

class Recipes extends Component {
    state = {
        recipes: [],
        isLoading: false,
        searchInput: "",
    }
    SearchBox = (props) => {
        return (
            <div>
                <input type="text" onChange={props.search} placeholder="Search recipes"></input>
            </div>
        );
    };

    searchValueHandler = (event) => {

        this.setState({
            searchInput: event.target.value,
        });
        console.log(this.state.searchInput);
    };

    componentDidMount() {
        this.setState({ isLoading: true });
        axios
            .get("http://localhost:3001/recipes")
            .then((response) =>
                this.setState({
                    recipes: response.data, isLoading: false
                })

            );

    };
    render() {
        const recipesList = this.state.recipes.map((recipe) => { return (<RecipeCard name={recipe.name} key={recipe.id} image={recipe.image} description={recipe.description} recipeIngredient={recipe.recipeIngredient} recipeInstructions={recipe.recipeInstructions} />) })
        return (
            <div>
                <h1>Recipe page</h1>
                <this.SearchBox search={this.searchValueHandler} />
                <div>
                    {recipesList}
                </div>
            </div >
        );
    }
}

export default Recipes;