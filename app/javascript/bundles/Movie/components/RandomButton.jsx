import PropTypes from 'prop-types';
import React from 'react';

export class RandomButton extends React.Component {

  onRandomClick(randomID){
    window.location.assign("/" + randomID)
  }

  render() {
    return (
        <div >
          <button className='btn btn-primary' onClick={this.onRandomClick.bind(this, this.props.randomID )}>Random Movie!</button>
        </div>

    );
  }
}


RandomButton.propTypes = {
  randomID: PropTypes.number
};