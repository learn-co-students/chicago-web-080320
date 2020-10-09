import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";

import Filter from './Filter'
import HogContainer from './HogContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      hogs: hogs,
      showGreased: false,
      sortBy: ''
    }
  }


  handleGreased = () => {
    this.setState({
     showGreased: !this.state.showGreased
    })
  }

  handleSortBy= (e) => {
    this.setState({
     sortBy: e.target.value
    })
  }

  findHogs = () => {
    let updatedHogs = this.state.hogs

    if (this.state.showGreased) {
      updatedHogs = updatedHogs.filter(hogObj => hogObj.greased )
    } 


    if (this.state.sortBy === 'name') {
      updatedHogs = updatedHogs.sort(function(hogA, hogB) {
        const nameA = hogA.name.toUpperCase(); // ignore upper and lowercase
        const nameB = hogB.name.toUpperCase(); // ignore upper and lowercase

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });

    } else if (this.state.sortBy === 'weight') {

      updatedHogs = updatedHogs.sort(function (a, b) {
        return a.weight - b.weight;
      });



      // updatedHogs = ...
      // logic for sorting by weight lives here
    }


    return updatedHogs
  }

  // findHogs = () => {
    // if (this.state.showGreased) {
      // return this.state.hogs.filter(hogObj => hogObj.greased )
    // } else {
      // return this.state.hogs
    // }
  // }

  render() {
    const hogsToShow = this.findHogs()

    return (
      <div className="App">
        <Nav />
        <Filter 
          handleSortBy={this.handleSortBy}
          handleGreased={this.handleGreased} />
        <HogContainer hogs={hogsToShow} />
      </div>
    );
  }
}

export default App;
