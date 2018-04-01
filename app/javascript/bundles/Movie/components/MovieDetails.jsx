import PropTypes from 'prop-types';
import React from 'react';

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
        	console.log(data);
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

          {this.state.Movie.title} <br/>
          {this.state.Movie.year} <br/>
          {this.state.Movie.network} <br/>
          {this.state.Movie.description} <br/>

        </div>


        
    );
  }
}
