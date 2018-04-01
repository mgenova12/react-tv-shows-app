import ReactOnRails from 'react-on-rails';

import MovieList from '../bundles/Movie/components/MovieList';
import MovieDetails from '../bundles/Movie/components/MovieDetails';

// This is how react_on_rails can see the Movie in the browser.
ReactOnRails.register({
  MovieList, MovieDetails,
});
