import React, { Component } from 'react';
import axios from 'axios';

class Recipes extends Component {
    state = {
        recipes: [],
        isLoading: false,
    }
    componentDidMount() {
        this.setState({ isLoading: true });
        axios
            .get("http://localhost:3001/recipes")
            .then((response) =>
                this.setState({ recipes: response.data, isLoading: false })
            );
    }
    render() {
        return (
            <div>
                <h1>Recipe page</h1>
                <div className="recipesList">
                    <div className="card">
                        <h2>Name {this.state.recipes.name}</h2><br></br>
                        <p>Description {this.state.recipes.description}</p><br></br>
                        {/* <p>{this.state.recipes.recipeIngredient}</p><br></br>
                    <p>{this.state.recipes.recipeInstructions}</p> */}
                    </div>

                </div>
            </div>
        );
    }
}

export default Recipes;