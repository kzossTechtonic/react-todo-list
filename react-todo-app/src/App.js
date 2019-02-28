import React, { Component } from 'react';
import './App.css';
import Todos from './Components/Todos'
import Header from './Components/Header'
import AddTodo from './Components/AddTodo'
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Dinner with dude',
        completed: true 
      },
      {
        id: uuid.v4(),
        title: 'Meeting with boss',
        completed: false
      } 
    ]
  }

  //Toggle Complete
markComplete = (id) => {
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

delTodo= (id) => {
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}

addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo] });
}

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      <div className="container">
        <Header />
        <AddTodo addTodo={this.addTodo} />
       <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
       </div>
      </div>
    );
  }
}

export default App;
