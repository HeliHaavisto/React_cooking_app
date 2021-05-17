import React from 'react';
import { Link } from 'react-router-dom';


const RecipeCard = (props) => {
    console.log(props);
    return (
        <div className="recipesList" key={props.id}>
            <div className="card">
                <section id="pins">
                    <div className="pin"></div>
                    <div className="pin"></div>
                </section>
                <h2>{props.name}</h2><br></br>
                <img src={`${props.image}`} alt={props.name} />
                <p>{props.description}</p><br></br>

                <Link to={`/React_cooking_app/#/recipes/${props.link}`}>Read more</Link>


            </div>

        </div>
    );
};

export default RecipeCard;