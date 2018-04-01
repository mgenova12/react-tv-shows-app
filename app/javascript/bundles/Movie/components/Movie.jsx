import PropTypes from 'prop-types';
import React from 'react';

export class Movie extends React.Component {

  handleRedirect(id){
    window.location.assign("/" + id)
  }

  render() {

    return (
        <div className="col-md-2">
          <div onClick={this.handleRedirect.bind(this, this.props.movie.id)} className="well">
            <img className="image" src={this.props.movie.image}/>
                <div className="middle">
                  <div className="text">
                    {this.props.movie.title} <br/> 
                    ({this.props.movie.year})           
                  </div>
                </div>
          </div>
        </div>

    );
  }
}
