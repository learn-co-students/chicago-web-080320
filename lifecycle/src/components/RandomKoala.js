import React, { Component } from 'react'


import KoalaCard from './KoalaCard'



class RandomKoala extends Component {

  renderKoalas = () => {
    return this.props.koalas.map(k => {
      return <img src={k.image_url} />
    })
  }

  componentDidUpdate(prevProps, prevState){
    console.log(prevProps, 'prev')
    console.log(this.props, 'current')
  }

  render () {
    return (
      <div className="app-children">
      {
        this.renderKoalas()
      }
      </div>
    )
  }
}

export default RandomKoala
