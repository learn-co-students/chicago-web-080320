import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import WalletForm from './components/WalletForm';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {
  constructor(){
    super()
    this.state = {
      sushis: [],
      startIndex: 0,
      budget: 50
    }
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json()) .then(sushis => {
      const updatedSushis = sushis.map(sushiObj => {
        return {
          ...sushiObj,
          isEaten: false
        }
      }).slice(0, 12)

      this.setState({
        sushis: updatedSushis
      })
    })
  }

  handleEaten = (id, price) => {
    if (price > this.state.budget) {
      alert('Youre out of money!')
      return
    }

    const updatedSushis = this.state.sushis.map(sushiObj => {
      if (sushiObj.id === id) {
        return {
          ...sushiObj,
          isEaten: true
        }
      } else {
        return sushiObj
      }
    })

    this.setState({
      sushis: updatedSushis,
      budget: this.state.budget - price
    })


  }

  handleMoreButton = () => {

    const index = ( (this.state.startIndex + 4) >= this.state.sushis.length) ? 0 : this.state.startIndex + 4


    this.setState({
      startIndex: index
    })
  }

  updateBudget = (newAmount) => {
    this.setState({
      budget: parseInt(newAmount)
    })
  }

  render() {
    const fourSushis = this.state.sushis.slice(this.state.startIndex, this.state.startIndex + 4)
    const eatenSushis = this.state.sushis.filter(sushiObj => sushiObj.isEaten)

    return (
      <div className="app">
        <WalletForm updateBudget={this.updateBudget}/>
        <SushiContainer 
          sushis={fourSushis} 
          handleEaten={this.handleEaten}
          handleMoreButton={this.handleMoreButton} />
        <Table budget={this.state.budget} eatenSushis={eatenSushis}/>
      </div>
    );
  }
}

export default App;

