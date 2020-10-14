
import React from 'react';
import Navbar from './Navbar';
import PaintingList from './PaintingList';
import UsersContainer from './UsersContainer';
import About from './About';
import Dashboard from './Dashboard';
import Login from './Login';
import { Route, Switch } from 'react-router-dom'


const reqObj = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body:  JSON.stringify({})
}

fetch('http://localhost:3000', reqObj)
.then(resp => resp.json())
.then(data => {
  console.log('data', data)
})

const App = () => {
  return (
    <div className="App">
      <Navbar icon="paint brush" title="Painterest" description="out app" />
      <Switch>

        <Route path={'/about'} component={About} />
        <Route path={'/login'} component={Login} />
        <Route path={'/dashboard/:username'} component={Dashboard} />
        <Route exact path={'/'} component={PaintingList} />

        <Route path={'*'} component={Component404} />

      </Switch>
    </div>
  );
};

export default App;




