import React, { Component } from 'react';
import Recipe from './Recipe';

class RecipeList extends Component {
    static defaultProps = {
        recipes: ["", "", ""]
    }

    render() {
        return (
            <div className="recipe-list">
            {this.props.recipes.map( (recipe, index) => (
                <Recipe key={index} {...recipe} />
            ))}
            </div>
        );
    }
}

export default RecipeList;