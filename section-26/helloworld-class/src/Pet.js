import React, { Component } from 'react';
import "./Pet.css"
import HobbyList from './HobbyList';

class Pet extends Component {
    render() {
        return (
            <div className="card">
                <h2 className="name">Moxie</h2>
                <img src="https://avatars2.githubusercontent.com/u/3539074?s=460&v=4" alt="pig"></img>
                <h5 style={{fontSize: '2em', margin: '2px'}}>Hobbies</h5>
                <HobbyList />
            </div>
        );
    }
}

export default Pet;