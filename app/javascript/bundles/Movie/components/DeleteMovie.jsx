import PropTypes from 'prop-types';
import React from 'react';

export class DeleteMovie extends React.Component {

  onDeleteMovie(id){
    this.props.DeleteMovie(id)
    
    $.ajax({
      type: 'DELETE',
      url: '/api/v1/movies/' + id,
      dataType: 'json',
      cache: false,
      success: function(data){

      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  }

  render() {
    return (
      <div >
        <button onClick={this.onDeleteMovie.bind(this, this.props.movieID)} className='btn btn-danger'> X </button>
      </div>
    );
  }
}


DeleteMovie.propTypes = {
  DeleteMovie: PropTypes.func,
  movieID: PropTypes.number
};