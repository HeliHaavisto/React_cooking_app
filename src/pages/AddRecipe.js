import React from 'react';

const AddRecipe = () => {
    return (
        <div className="addRecipe">
            <div className="card">
                <section id="pins">
                    <div className="pin"></div>
                    <div className="pin"></div>
                </section>

                <h1>Add your own recipe</h1>
                <form method="post" enctype="multipart/form-data">
                    <label htmlFor="name">Recipe name</label><br></br>
                    <input type="text" name="name" required></input><br></br>

                    <label htmlFor="description">Recipe description</label><br></br>
                    <input type="text" name="description" required></input><br></br>

                    <label htmlFor="image">Select recipe image</label><br></br>
                    <input type="file" name="image"></input><br></br>

                    <label htmlFor="ingredients">Recipe ingredients, separate with comma</label><br></br>
                    <textarea name="ingredients" cols="30" rows="20" maxLength="500" required></textarea><br></br>

                    <label htmlFor="instructions">Recipe instructions</label><br></br>
                    <input type="text" name="name" required placeholder="step1"></input><br></br>
                    <textarea name="text" cols="30" rows="20" maxLength="500" required></textarea><br></br>
                    <input type="text" name="name" required placeholder="step2"></input><br></br>
                    <textarea name="text" cols="30" rows="20" maxLength="500" ></textarea><br></br>
                    <input type="text" name="name" required placeholder="step3"></input><br></br>
                    <textarea name="text" cols="30" rows="20" maxLength="500" ></textarea><br></br>

                    <button type="submit">SEND</button>

                </form>
            </div>
        </div>
    );
};

export default AddRecipe;