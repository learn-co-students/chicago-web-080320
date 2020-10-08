

import React, { Component } from 'react';
import WidgetSelector from './components/WidgetSelector'
import StockTicker from './components/StockTicker'
import DigitalClock from './components/DigitalClock'
import RandomKoala from './components/RandomKoala'

class App extends Component {
  constructor(){
    super()
    this.state = {
      showClock: false,
      koalas: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/koalas')
    .then(resp => resp.json())
    .then(kArr=> {
      this.setState({
        koalas: kArr
      })

    })
  }

  toggleWidget = () => {
    this.setState({
      showClock: !this.state.showClock
    })
  }

  render() {
    return ( 
      <div id='app'>
      <WidgetSelector toggleWidget={this.toggleWidget} />
        <RandomKoala koalas={this.state.koalas}/>
      </div>
    )
  }
}

export default App;





      // { this.state.showClock ?  <DigitalClock /> : <StockTicker /> }














  // componentDidMount(){
    // triggered after the first render
    // CDM is ideal for populating the page. 
    // setting up any processes that need to occur
    // ie fetch request that the populate the page
    // setIntervals / setTimeouts are other common things that occur in CDM

  // }
