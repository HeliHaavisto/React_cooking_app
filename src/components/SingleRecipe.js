import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState();
    let { id } = useParams();
    let history = useHistory();
    console.log("id on, " + id);
    useEffect(() => {
        if (!recipe) {
            axios.get("https://intense-journey-32788.herokuapp.com/recipe/find/" + id)
                .then((res) => setRecipe(res.data));
        }
    })

    let recipeData = undefined;

    if (!recipe) {
        recipeData = <h1>Loading...</h1>
    }

    if (recipe) {
        recipeData =
            <>
                <div className="card" key={recipe.id}>
                    <section id="pins">
                        <div className="pin"></div>
                        <div className="pin"></div>
                    </section>
                    <h1 >{recipe.name}</h1>
                    <img src={`${recipe.image}`} alt={recipe.name} />
                    <p>{recipe.description}</p><br></br>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.recipeIngredient.map(
                            (item) => {
                                return (
                                    <li key={item.id}>
                                        {item.amount} {item.name}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    <h3>Instructions</h3>
                    <ul>
                        {recipe.recipeInstructions.map(
                            (item) => {
                                return (
                                    <li key={item.id}>
                                        {" "}
                                        {item.name}
                                        <ul>
                                            <li>{item.text}</li>
                                        </ul>
                                    </li>
                                )
                            }
                        )}
                    </ul>

                </div>
                <button onClick={() => history.goBack()}>Back to recipes</button>
            </>
    }

    return (
        <div>
            {recipeData}
        </div>
    );
};

export default SingleRecipe;