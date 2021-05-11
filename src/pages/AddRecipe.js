import React, { useState, useEffect } from 'react';
import axios from "axios";

const AddRecipe = () => {
    const [newRecipe, setNewRecipe] = useState({
        name: "",
        description: "",
        image: "",
        recipeIngredient: [],
        recipeInstructions: [],
    });
    const [instructions, setInstructions] = useState([
        { id: 1, name: "", text: "" },
    ]);

    const [ingredients, setIngredients] = useState([
        { id: 1, amount: "", name: "" },
    ]);

    const valueChangeHandler = (e) => {
        setNewRecipe({
            ...newRecipe, [e.target.name]: e.target.value
        });
    }

    const changeInstructions = (e, i) => {
        const { name, value } = e.target;
        const list = [...instructions];
        list[i][name] = value;
        setInstructions(list);
        setNewRecipe({ ...newRecipe, recipeInstructions: instructions });

    };

    const changeIngredients = (e, i) => {
        const { name, value } = e.target;
        const ingrList = [...ingredients];
        ingrList[i][name] = value;
        setIngredients(ingrList);
        setNewRecipe({ ...newRecipe, recipeIngredient: ingredients });
    }

    const addMoreIngr = (e, i) => {
        e.preventDefault();
        const newIngredient = { id: instructions.length + 1, amount: "", name: "" };
        setIngredients([...ingredients, newIngredient]);

    }

    const addMore = (e, i) => {
        e.preventDefault();
        const newInstruction = { id: instructions.length + 1, name: "", text: "" };
        setInstructions([...instructions, newInstruction]);
    };

    const submitRecipe = (e) => {
        e.preventDefault();
        // axios.post("http://localhost:3001/recipes", newRecipe)
        axios.post("https://intense-journey-32788.herokuapp.com/recipe/add", newRecipe)
        e.target.reset();
    };

    const ingredientsPart = ingredients.map((_, i) => {
        return (
            <div>
                <label htmlFor="">Amount</label><br></br>
                <input type="text" name="amount" onChange={(e) => changeIngredients(e, i)} ></input><br></br>
                <label htmlFor="">Ingredient</label><br></br>
                <textarea name="name" cols="20" rows="5" maxLength="100" onChange={(e) => changeIngredients(e, i)} required></textarea><br></br>
            </div>
        )
    })

    const instructionsPart = instructions.map((_, i) => {
        return (<div>
            <label htmlFor="">Instruction step</label><br></br>
            <input type="text" name="name" onChange={(e) => changeInstructions(e, i)} ></input><br></br>
            <label htmlFor="">Instruction </label><br></br>
            <textarea name="text" cols="20" rows="10" maxLength="500" onChange={(e) => changeInstructions(e, i)} required></textarea><br></br>
        </div>);
    })

    return (
        <div className="addRecipe">
            <div className="card">
                <section id="pins">
                    <div className="pin"></div>
                    <div className="pin"></div>
                </section>

                <h1>Add your own recipe</h1>
                <form encType="multipart/form-data" onSubmit={submitRecipe} >
                    <label htmlFor="name">Recipe name</label><br></br>
                    <input type="text" name="name" onChange={valueChangeHandler} required></input><br></br>

                    <label htmlFor="description">Recipe description</label><br></br>
                    <input type="text" name="description" onChange={valueChangeHandler} required></input><br></br>

                    <label htmlFor="image">Select recipe image</label><br></br>
                    <input type="file" name="image"></input><br></br>

                    {ingredientsPart}
                    <button onClick={addMoreIngr}>add new ingredient row</button><br></br>

                    {instructionsPart}

                    <button onClick={addMore}>add new instruction row</button><br></br>
                    <button type="submit">SEND</button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;