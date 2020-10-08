import React, { Component } from 'react'







class StockTicker extends Component {

  constructor(){
    super()
    this.state = {
      stock: this.getStock(),
      isGreen: true
    }
  }

  getStock = () => Math.floor(Math.random() * 100)

  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState({
        stock: this.getStock()
      })

    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.stock > prevState.stock) {
      this.setState({
        isGreen: true
      })
    } else if (this.state.stock < prevState.stock) {
      this.setState({
        isGreen: false
      })
    }
  }

  render() {
    const stockStyles = this.state.isGreen ? { color: 'green' } : { color: 'red' }

    return (
      <div className="app-children">
        <div id="ticker">
          <h2>Flatiron</h2>
          <div style={stockStyles}>
            {this.state.stock}
          </div>
        </div>
      </div>
    )
  }
}

export default StockTicker




  // componentDidUpdate(prevProps, prevState){


    // gets invoked after every rerender
    // ideal for changing things when you need to compare current vs prevState
    // or current vs Previous Props
  // }

