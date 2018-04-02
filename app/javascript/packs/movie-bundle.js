import ReactOnRails from 'react-on-rails';

import Movies from '../bundles/Movie/components/Movies';
import MovieDetails from '../bundles/Movie/components/MovieDetails';

// This is how react_on_rails can see the Movie in the browser.
ReactOnRails.register({
  Movies, MovieDetails,
});
