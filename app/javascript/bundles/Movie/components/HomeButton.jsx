import PropTypes from 'prop-types';
import React from 'react';

export class HomeButton extends React.Component {

  onHomeClick(){
    window.location.assign("/")
  }

  render() {
    return (
        <div className='homebutton'>
          <button className='btn btn-primary' onClick={this.onHomeClick.bind(this)}>Back to Movies</button>
        </div>
    );
  }
}