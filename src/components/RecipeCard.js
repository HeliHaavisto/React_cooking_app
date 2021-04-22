import React from 'react';

const RecipeCard = (props) => {
    return (
        <div className="recipesList">
            <div className="card">
                <section id="pins">
                    <div className="pin"></div>
                    <div className="pin"></div>
                </section>
                <h2>{props.name}</h2><br></br>
                <img src={`assets/${props.image}`} alt={props.name} />
                <p>{props.description}</p><br></br>
                <h3>Ingredients</h3>
                <ul>
                    {props.recipeIngredient.map(
                        (item) => {
                            return <li>{item}</li>;
                        }
                    )}
                </ul>
                <h3>Instructions</h3>
                <ul>
                    {props.recipeInstructions.map(
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

        </div>
    );
};

export default RecipeCard;