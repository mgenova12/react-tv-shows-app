import PropTypes from 'prop-types';
import React from 'react';
import {RandomButton} from './RandomButton'

export class Navbar extends React.Component {
 
  render() {
    
    let randomID

    if(this.props.movies && this.props.movies[Math.floor(Math.random()*this.props.movies.length)] ){
      randomID = this.props.movies[Math.floor(Math.random()*this.props.movies.length)].id
    }
    return (
      <div className='Navbar'>
        <RandomButton randomID={randomID} />
      </div>
    );
  }
}

Navbar.propTypes = {
  movies: PropTypes.array
};