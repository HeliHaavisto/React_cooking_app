import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from "axios";

const SingleRecipe = () => {
    const [recipe, setRecipe] = useState();
    let { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        if (!recipe) {
            axios.get("http://localhost:3001/recipes/" + id)
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
                <div className="card">
                    <section id="pins">
                        <div className="pin"></div>
                        <div className="pin"></div>
                    </section>
                    <h1>{recipe.name}</h1>
                    <img src={`../assets/${recipe.image}`} alt={recipe.name} />
                    <p>{recipe.description}</p><br></br>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.recipeIngredient.map(
                            (item) => {
                                return <li>{item}</li>;
                            }
                        )}
                    </ul>
                    <h3>Instructions</h3>
                    <ul>
                        {recipe.recipeInstructions.map(
                            (item) => {
                                return (
                                    <li>
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