

import React from 'react';
import logo from './logo.svg';
import './App.css';
import WelcomeContainer  from './WelcomeContainer'

// 3 basic things that are considered valid JSX

// 1. You can render what are tradition html nodes
// 2. javascript expression (as long theyre wrapped inside of a curly bracket)
// 3. Other React Components

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <WelcomeContainer />
        </header>
      </div>
    )
  }
}


export default App
