import React from 'react';

const RecipeCard = (props) => {
    return (
        <div className="recipesList">
            <div className="card">
                <h2>{props.name}</h2><br></br>
                <img src={props.image} alt={props.name} />
                <p>{props.description}</p><br></br>

                {/* <p>{props.recipeIngredient[0]}</p><br></br>
                <p>{props.recipeInstructions[0]}</p> */}
            </div>

        </div>
    );
};

export default RecipeCard;