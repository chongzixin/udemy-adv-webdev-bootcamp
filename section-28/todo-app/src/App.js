import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // add inputText to an array, then clear it.
    const todos = [...this.state.todos, this.state.inputText];
    this.setState({todos, inputText: ''});
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="What needs to be done?" 
            value={this.state.inputText} 
            name="inputText"
            onChange={(e) => (this.setState({ [e.target.name] : e.target.value }))}
          />
          <button>SAVE</button>
        </form>
        <TodoList {...this.state} />
      </div>
    );
  }
}

const TodoList = props => {
  const todos = props.todos.map((todo) => {
    return <li>{todo}</li>
  })
  return <ol>{todos}</ol>
}

export default App;