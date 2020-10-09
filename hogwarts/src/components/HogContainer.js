
import React from 'react'
import HogTile from './HogTile'

const HogContainer = (props) => {
  return <div className='ui three cards'>
    {
      props.hogs.map(hogObj => {
        return <HogTile {...hogObj} />
      })
    }
  </div>
}

export default HogContainer





// Class vs Functional Components
// 1. ClassComponents have state. FunctionalComponents do not.
// 2. ClassComponents have lifecycle methods. FunctionalComponents do not.
// 3. Props are available to both but accesses differently
