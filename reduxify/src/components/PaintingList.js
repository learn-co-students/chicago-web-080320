import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import Painting from './Painting';
import { connect } from 'react-redux'
import { fetchPaintingsSuccess } from '../actions/paintings'

class PaintingList extends React.Component {

  componentDidMount(){
    fetch('http://localhost:3000/paintings')
    .then(resp => resp.json())
    .then(paintings => {
      this.props.fetchPaintingsSuccess(paintings) // dispatching an action here
    })
  }

  handleVote = (id) => {
    const updatedPaintings = this.state.paintings.map(p => {
          if (p.id !== id) {
            return p;
          } else {
            return { ...p, votes: p.votes + 1 };
          }
    })

    this.setState({
      paintings: updatedPaintings
    })
  }

  renderPaintings = () => {
    return this.props.paintings.map(p => (
      <Painting
        painting={p}
      />
    ));
  }

  render() {
    console.log(this.props, '--props----');
    return (
        <div>
            <div>
                <h1>All Paintings</h1>
                <div className="ui items">{this.renderPaintings()}</div>
            </div>
        </div>
    );
  }
}



// mapStateToProps
//
// gets one arg: the store state
//  returns an object. All of the key/val of the obj become props in the component that is being connected


const mapStateToProps = (state) => {
  return {
    paintings: state.paintings,
  }
}

const mapDispatchToProps = {
  fetchPaintingsSuccess
}


export default connect(mapStateToProps, mapDispatchToProps)(PaintingList);




















    // this.setState(prevState => {
      // return {
        // paintings: prevState.paintings.map(p => {
          // if (p.id !== id) {
            // return p;
          // } else {
            // return { ...p, votes: p.votes + 1 };
          // }
        // })
      // };
    // });
