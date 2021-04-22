import React, { Component } from 'react';
import axios from 'axios';
import RecipeCard from "../components/RecipeCard";

class Recipes extends Component {
    state = {
        recipes: [],
        isLoading: false,
        searchInput: "",
    }
    SearchBox = (props) => {
        return (
            <div >
                <input type="text" className="searchBox" onChange={props.search} placeholder="Search recipes"></input>
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
        const recipeFilter = this.state.recipes.filter(recipe => {
            return recipe.name.toLocaleLowerCase().includes(this.state.searchInput.toLocaleLowerCase());
        });
        const recipesList = recipeFilter.map((recipe) => { return (<RecipeCard name={recipe.name} key={recipe.id} image={recipe.image} description={recipe.description} recipeIngredient={recipe.recipeIngredient} recipeInstructions={recipe.recipeInstructions} />) })
        return (
            <div className="recipes">
                <div className="card2">
                    <section id="pins">
                        <div className="pin"></div>
                        <div className="pin"></div>
                    </section>

                    <h1>Recipe page</h1>
                    <this.SearchBox search={this.searchValueHandler} />
                </div>

                <div>
                    {recipesList}
                </div>
            </div >
        );
    }
}

export default Recipes;