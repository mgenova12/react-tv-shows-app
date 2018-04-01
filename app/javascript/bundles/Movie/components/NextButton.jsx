import PropTypes from 'prop-types';
import React from 'react';

export class NextButton extends React.Component {

  onNextClick(id){

    window.location.assign("/" + (id+1))
    
  }




  render() {

    return (
        <div className="nextbutton" >

          <button className="btn btn-primary" onClick={this.onNextClick.bind(this, this.props.movieID)}> Next Movie </button>
        </div>

    );
  }
}
