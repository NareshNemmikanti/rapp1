import './App.css';
import React, { Component } from 'react';
import Welcome from './Welcome';
import Counter from './Counter';
import AddCourse from './AddCourse';

class App extends Component {
  constructor(){
    super();
  }
  render(){
      return (
        <div className="App">
          <header className="App-header">
            <Welcome cname="React" />
          </header>
          <AddCourse/>
        </div>
      )
  }
}

export default App;
