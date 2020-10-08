import React, { Component } from 'react'



class DigitalClock extends Component {
  constructor(){
    super()
    const time = this.findTime()

    this.state = {
      time: time
    }
  }

  findTime = () => {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }

  componentDidMount(){
    this.intervalId = setInterval(() => {
      const time = this.findTime()

      this.setState({
        time: time
      })

    }, 1000)
  }

  componentWillUnmount(){
    clearInterval(this.intervalId)
    // this is where you will clean up any processes that are still runninng and 
    // need to be terminated
  }

  render () {
    return (
      <div className="app-children">
        <h2 id="digital">
        { this.state.time }
        </h2>
      </div>
    )
  }
}

export default DigitalClock










