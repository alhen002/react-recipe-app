// styles
import './Create.css';

import React, {useEffect} from 'react';
import {useState, useRef} from "react";
import {useFetch} from "../../hooks/useFetch";
import {useHistory} from "react-router-dom";


export function Create(props) {
    // state
    const [title, setTitle] = useState('');
    const [method, setMethod] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [newIngredient, setNewIngredient] = useState('');
    const [ingredients, setIngredients] = useState([]);
    const ingredientInput = useRef(null); // Referenz zu objekt für dom manupulation
    const history = useHistory();

    const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST');

    const handleSubmit = (e) => {
        e.preventDefault();
        postData({
            title, ingredients, method, cookingTime: cookingTime + ' minutes'
        })

    }
    const handleAdd = e => {
        e.preventDefault();
        const ing = newIngredient.trim();

        if (ing && !ingredients.includes(ing)) {
            setIngredients(prevIngredients => [...prevIngredients,  ing])
        }
        setNewIngredient('');
        ingredientInput.current.focus();
    }

   useEffect(() => {
       if (data) {
           history.push('/');
       }
   }, [data])


    return (
        <div className= "create">
            <h2 className="page-title">Add a new Recipe</h2>
            <form onSubmit={handleSubmit}>

                <label>
                    <span>Recipe title:</span>
                    <input type="text"
                           onChange={(e) => setTitle(e.target.value)}
                           value={title}
                           required
                    />
                </label>
                <label>
                    <span>Recipe ingredients:</span>
                    <div className="ingredients">
                        <input type="text"
                               onChange={(e) => setNewIngredient(e.target.value)}
                                value={newIngredient}
                               ref={ingredientInput}
                        />
                        <button className="btn"
                                onClick={handleAdd}
                        >add</button>
                    </div>
                </label>
                <p>Current ingredients: {ingredients.map((i) => <em key={i}>{i},</em>)}</p>
                <label>
                    <span>Recipe method:</span>
                    <textarea
                        onChange={(e) => setMethod(e.target.value)}
                        value={method}
                        required
                    />
                </label>
                <label>
                    <span>Cooking time in minutes:</span>
                    <input type="number"
                           onChange={(e) => setCookingTime(e.target.value)}
                           value={cookingTime}
                           required
                    />
                </label>

                <button className="btn">Submit</button>
            </form>
        </div>
    );
}
