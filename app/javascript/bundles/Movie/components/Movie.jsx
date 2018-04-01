import PropTypes from 'prop-types';
import React from 'react';

export class Movie extends React.Component {

  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);

    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
    };
  }

  handleRedirect(id){
    window.location.assign("/" + id)
  }


  render() {

    return (
        <div className="col-md-2"
          onMouseEnter={this.handleMouseHover}
          onMouseLeave={this.handleMouseHover} >

          <div className="well movielist" 
            onClick={this.handleRedirect.bind(this, this.props.movie.id)} >
          
            <img src={this.props.movie.image}/>

          </div>

          {
            this.state.isHovering &&
              <div className="text">
                {this.props.movie.title} <br/> 
                ({this.props.movie.year})           
              </div>
          }
          
        </div>

    );
  }
}
