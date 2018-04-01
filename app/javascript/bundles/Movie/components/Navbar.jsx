import PropTypes from 'prop-types';
import React from 'react';
import {RandomButton} from './RandomButton'

export class Navbar extends React.Component {
 

  render() {
    let firstID 
    let lastID 

    this.props.movies.map(movie => {
      if(movie.id > lastID || !lastID){
        lastID = movie.id
      }
      if(movie.id < firstID || !firstID){
        firstID = movie.id
      }
    })
      // console.log(firstID)
      // console.log(lastID)

    return (
        <div className='Navbar'>
          <RandomButton firstID={firstID} lastID={lastID} />
        </div>

    );
  }
}
