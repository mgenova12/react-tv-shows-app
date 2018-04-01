import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <MovieList />, <MovieDetails />,
    document.body.appendChild(document.createElement('div')),
  )
})
