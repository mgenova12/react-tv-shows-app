import PropTypes from 'prop-types';
import React from 'react';
import {NextButton} from './NextButton'
import {Navbar} from './Navbar'

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      Movie: []
    };
  }

   getMovie(){
    var url = window.location.pathname;
    var id = url.substring(url.lastIndexOf('/') + 1);

    $.ajax({
      url: '/api/v1/movies/' + id,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({Movie: data}, function(){
        	// console.log(data);
        });
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  } 

  componentDidMount(){
    this.getMovie();
  }

  render() {
    return (      
      <div>
        <div className='well clearfix'>
          <div className='details'>
              <h2>{this.state.Movie.title} ({this.state.Movie.year}) </h2>
              <hr/>

              <img src={this.state.Movie.image}/> <br/>

              {this.state.Movie.description} 
              <br/>
              <br/>
              Director: {this.state.Movie.director}
              <br/>
              Genre: {this.state.Movie.genre} 
              <br/>
              Rating: {this.state.Movie.rating} / 10
              <br/>
              Random Quote: "{this.state.Movie.quote}"


              <NextButton movieID={this.state.Movie.id}/>
           </div>
        </div>
      </div>

    );
  }
}
