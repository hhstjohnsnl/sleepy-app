import React, { Component } from 'react';
import Header from './Header'
import Form from './Form'
import DynamicForm from './DynamicForm.js'
import StatefulForm from './StatefulForm.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Form /> */}
        <StatefulForm />
      </div>
    );
  }
}

export default App;
