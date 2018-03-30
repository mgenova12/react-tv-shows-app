import ReactOnRails from 'react-on-rails';

import Movie from '../bundles/Movie/components/Movie';

// This is how react_on_rails can see the Movie in the browser.
ReactOnRails.register({
  Movie,
});
