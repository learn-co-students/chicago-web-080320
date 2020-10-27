
import React from 'react';

import { connect } from 'react-redux'
import { thunkIncrementVote, thunkDeletePainting } from '../actions/paintings'


const Painting = props => {

  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug} />
      </div>
      <div className="middle aligned content">
        <div className="header">{`"${props.painting.title}" by ${props.painting
          .artist.name}`}</div>
        <div className="description">
          <a onClick={() => props.thunkIncrementVote(props.painting)}>
            <i className="large caret up icon" />
            {props.painting.votes} votes
          </a>
        </div>
        <div onClick={() => props.thunkDeletePainting(props.painting.id)} className="ui red basic button">
          Delete It
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps= {
  thunkIncrementVote,
  thunkDeletePainting
}



export default connect(null, mapDispatchToProps)(Painting)













