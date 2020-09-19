import { combineReducers } from 'redux';

const tweets = (tweets = [1,2,3,'hello'], action) => {
  return tweets;
};

export default combineReducers({
  tweets,
});
