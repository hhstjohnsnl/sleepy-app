import React, { Component } from 'react';
import Header from './Header'
import Form from './Form'
import DynamicForm from './DynamicForm.js'
import StatefulForm from './StatefulForm.js'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <Header />
        {/* <Form /> */}
        <DynamicForm />
        {/* <StatefulForm /> */}
      </div>
    );
  }
}

export default App;
