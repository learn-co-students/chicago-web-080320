import React from 'react';
import DeleteablePainting from './DeleteablePainting';
import Painting from './Painting';
import { connect } from 'react-redux'
import { thunkFetchPaintings } from '../actions/paintings'

class PaintingList extends React.Component {

  componentDidMount(){
    this.props.thunkFetchPaintings()
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
                {
                  this.props.loader ?
                  <h4>Loading...</h4>
                  :
                  <div className="ui items">{this.renderPaintings()}</div>
                }
            </div>
        </div>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    paintings: state.paintings,
    loader: state.loader
  }
}

const mapDispatchToProps = {
  thunkFetchPaintings,
}


export default connect(mapStateToProps, mapDispatchToProps)(PaintingList);

