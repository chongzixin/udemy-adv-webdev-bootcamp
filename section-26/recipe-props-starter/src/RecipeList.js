import React, { Component } from 'react';
import './RecipeList.css';

import Recipe from './Recipe';
// import PropTypes from 'prop-types';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "pasta",
                ingredients:["flour", "water"],
                instructions:"Mix ingredients",
                img: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Fettuccine-Carbonara_exps175448_SD143205B01_28_2bC_RMS-1-696x696.jpg"
            },
            {
                title:"steak",
                ingredients:["beef", "butter"],
                instructions:"pan-fry",
                img: "https://i1.wp.com/www.eatthis.com/wp-content/uploads/2020/01/wagyu-beef.jpg?resize=640%2C360&ssl=1"
            },
            {
                title: "ootoro",
                ingredients: ["tuna", "fat"],
                instructions: "slice",
                img: "https://external-preview.redd.it/IuVYZ5j4hhZnh9X-TQt0yEbC5NdI9tY86XddisnWhV0.jpg?auto=webp&s=49770387e2d926094fb1d4c8d85942aeb5b28a95"
            },
        ]
    }

    // static propTypes = {
    //     recipes: PropTypes.array(PropTypes.object)
    // }

    render() {
        const recipes = this.props.recipes.map((recipe, index) => (
            <Recipe key={index} {...recipe} />
        ));

        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;