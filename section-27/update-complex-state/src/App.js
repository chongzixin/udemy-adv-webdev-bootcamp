import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };

    setTimeout(() => {
      // get a random instructor, and remove a random hobby from the list
      const randInstructor = Math.floor(Math.random() * this.state.instructors.length);
      const randHobby = Math.floor(Math.random() * this.state.instructors[randInstructor].hobbies.length);
      
      // instructorCopy[randInstructor].hobbies.splice(randHobby,1); // THIS IS WRONG BECAUSE SPLICE IS MODIFYING THE HOBBIES ARRAY

      // instead do the below
      // first create a copy of the instructors, then match the current index with the randomInstructor
      const instructors = this.state.instructors.map((inst, i) => {
        if(i === randInstructor) {
          // if it matches, first make a copy of the hobbies, then remove the randomHobby
          const hobbies = [...inst.hobbies];
          hobbies.splice(randHobby, 1);
          // finally, return a new object with whatever is in instructor + the new hobby
          return {
            ...inst,
            hobbies
          };
        }
        return inst;
      });

      // must return it as an object with the same name.
      this.setState( {instructors} );
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
