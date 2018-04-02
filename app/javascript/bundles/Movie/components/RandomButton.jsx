import PropTypes from 'prop-types';
import React from 'react';

export class RandomButton extends React.Component {

  onRandomClick(firstID, lastID){
    window.location.assign("/" + (Math.floor(Math.random()*(lastID-firstID+1)+firstID)))
  }

  render() {
    return (
        <div >
          <button className='btn btn-primary' onClick={this.onRandomClick.bind(this, this.props.firstID, this.props.lastID )}>Random Movie!</button>
        </div>

    );
  }
}
