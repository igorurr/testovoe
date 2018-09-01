import { routerReducer, syncHistoryWithStore } from 'react-router-redux';

export default combineReducers({
  routing: routerReducer,
  tracks,
  playlists,
  filterTracks
});