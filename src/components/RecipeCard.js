import React from 'react';
import { Link } from 'react-router-dom';

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

                <Link to={`/recipes/${props.link}`}>Read more</Link>


            </div>

        </div>
    );
};

export default RecipeCard;