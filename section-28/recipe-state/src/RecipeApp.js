import React, { Component } from 'react';
import './RecipeApp.css';

import RecipeList from './RecipeList';
import Navbar from "./Navbar";

class RecipeApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
            id: 1,
            title: "pasta",
            ingredients:["flour", "water"],
            instructions:"Mix ingredients",
            img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Fettuccine-Carbonara_exps175448_SD143205B01_28_2bC_RMS-1-696x696.jpg"
        },
        {
            id: 2,
            title:"steak",
            ingredients:["beef", "butter"],
            instructions:"pan-fry",
            img: "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/01/wagyu-beef.jpg?resize=640%2C360&ssl=1"
        },
        {
            id: 3,
            title: "ootoro",
            ingredients: ["tuna", "fat"],
            instructions: "slice",
            img: "https://external-preview.redd.it/IuVYZ5j4hhZnh9X-TQt0yEbC5NdI9tY86XddisnWhV0.jpg?auto=webp&s=49770387e2d926094fb1d4c8d85942aeb5b28a95"
        },
      ],
      nextRecipeId: 4,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList recipes={this.state.recipes}/>
      </div>
    );
  }
}

export default RecipeApp;