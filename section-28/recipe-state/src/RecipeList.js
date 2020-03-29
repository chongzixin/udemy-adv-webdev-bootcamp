import React, { Component } from 'react';
import './RecipeList.css';

import Recipe from './Recipe';
// import PropTypes from 'prop-types';

class RecipeList extends Component {
    // static propTypes = {
    //     recipes: PropTypes.array(PropTypes.object)
    // }

    render() {
        const recipes = this.props.recipes.map((recipe) => (
            <Recipe key={recipe.id} {...recipe} />
        ));

        return (
            <div className="recipe-list">
                {recipes}
            </div>
        );
    }
}

export default RecipeList;