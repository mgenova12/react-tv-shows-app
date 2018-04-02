import PropTypes from 'prop-types';
import React from 'react';

export class AddMovie extends React.Component {
    constructor(){
      super();
      this.state = {
        newMovie:[]
      }
    }

  handleSubmit(event){
    event.preventDefault();
    if (this.refs.title.value === ''){
      alert('Please Enter a Title')
    } else {
      var parameters = {
        title: this.refs.title.value,
        year: this.refs.year.value,
        image: this.refs.image.value,
        director: this.refs.director.value,
        genre: this.refs.genre.value,
        rating: this.refs.rating.value,
        quote: this.refs.quote.value,
        description: this.refs.description.value
      }

      $.ajax({
        type: 'POST',
        url: '/api/v1/movies',
        dataType: 'json',
        data: parameters,
        cache: false,
        success: function(response){
          this.setState({          
          newMovie:{
            id: response.id,
            title: response.title,
            year: response.year,
            image: response.image,
            director: response.director,
            genre: response.genre,
            rating: response.rating,
            quote: response.quote,
            description: response.description
          }}, function(){
            this.props.AddNewMovie(this.state.newMovie)
            document.getElementById("movie-form").reset();
          });
        }.bind(this),
        error: function(xhr, status, err){
          console.log(err);
        }
      });
    }
  }


  render() {
    return (
      <div className='addmovies'>
        <form id='movie-form' className="form-inline" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                 <input type="text" className="form-control" ref="title" placeholder="Title"/>
            </div>
            <div className="form-group">    
                 <input type="text" className="form-control" ref="year" placeholder="Year"/>   
            </div>
            <div className="form-group">    
                 <input type="text" className="form-control" ref="image" placeholder="Image URL"/>   
            </div>
            <div className="form-group">    
                 <input type="text" className="form-control" ref="director" placeholder="Director"/>   
            </div>
            <div className="form-group">    
                <input type="text" className="form-control" ref="genre" placeholder="Genre"/>   
            </div>
            <div className="form-group">    
                <input type="text" className="form-control" ref="rating" placeholder="Rating"/>   
            </div>  
            <div className="form-group">    
                <input type="text" className="form-control" ref="quote" placeholder="Quote"/>   
            </div>                                                           
            <div className="form-group">    
                <input type="text" className="form-control" ref="description" placeholder="Description"/>   
            </div>     

           <button type="submit" className="btn btn-primary">Add Movie</button>      
        </form>

      </div>
    );
  }
}


AddMovie.propTypes = {
  AddNewMovie: PropTypes.func
};




