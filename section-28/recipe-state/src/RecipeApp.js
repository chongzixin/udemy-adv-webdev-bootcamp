import React, { Component } from 'react';
import './RecipeApp.css';

import RecipeList from './RecipeList';
import RecipeInput from './RecipeInput';
import Navbar from "./Navbar";

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
            id: 0,
            title: "pasta",
            ingredients:["flour", "water"],
            instructions:"Mix ingredients",
            img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Fettuccine-Carbonara_exps175448_SD143205B01_28_2bC_RMS-1-696x696.jpg"
        },
        {
            id: 1,
            title:"steak",
            ingredients:["beef", "butter"],
            instructions:"pan-fry",
            img: "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/01/wagyu-beef.jpg?resize=640%2C360&ssl=1"
        },
        {
            id: 2,
            title: "ootoro",
            ingredients: ["tuna", "fat"],
            instructions: "slice",
            img: "https://external-preview.redd.it/IuVYZ5j4hhZnh9X-TQt0yEbC5NdI9tY86XddisnWhV0.jpg?auto=webp&s=49770387e2d926094fb1d4c8d85942aeb5b28a95"
        },
      ],
      nextRecipeId: 3,
    };

    this.handleSave = this.handleSave.bind(this);
  }

  handleSave(recipe) {
    this.setState((prevState, props) => {
      const newRecipe = { ...recipe, id: this.state.nextRecipeId };
      return {
        nextRecipeId: prevState.nextRecipeId + 1,
        recipes: [...this.state.recipes, newRecipe]
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeInput onSave={this.handleSave}/>
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;