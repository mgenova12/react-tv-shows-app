import PropTypes from 'prop-types';
import React from 'react';
import {NextButton} from './NextButton'
import {HomeButton} from './HomeButton'

export default class MovieDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      Movie: []
    };
  }

   getMovie(){
    $.ajax({
      url: '/api/v1/movies/' + this.props.id,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({Movie: data}, function(){
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
        <div className='well clearfix'>
          <div className='details'>
              <h2>{this.state.Movie.title} ({this.state.Movie.year}) </h2>
              <HomeButton/>
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

              <NextButton movies={this.props.movies} movieID={this.state.Movie.id}/>
           </div>
        </div>
    );
  }
}
