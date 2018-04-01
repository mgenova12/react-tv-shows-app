import PropTypes from 'prop-types';
import React from 'react';

export class Movie extends React.Component {

  handleRedirect(id){

    window.location.assign("/" + id)
  }



  render() {

    return (
        <div className="col-md-4">
          <div onClick={this.handleRedirect.bind(this, this.props.movie.id)} className="well">
            <img src="https://nerdist.com/wp-content/uploads/2015/12/killswitch-engage-revolver-star-wars-cover-crop.jpg"/>
            <br/>
              {this.props.movie.title} 
            <br/>
              {this.props.movie.year}           
          </div>
        </div>

    );
  }
}
