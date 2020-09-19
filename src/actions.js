export const ADD_TWEETS = 'ADD_TWEETS'

// Thunk'd action creator -> calls regular redux action when promise resolves
export const fetchTweets = () => {
  return (dispatch) => {
    // 💰 ways to hit an API endpoint - (fetch api, axios, jquery.ajax)
    fetch('http://tweet-stream.glitch.me/api/tweets')
      .then((response) => response.json())
      .then((response) => {
        // console.log('made it here')
        // console.log(response, dispatch)
        dispatch(addTweets(response.tweets))
      })
  }
}

export const addTweets = (tweets) => ({ type: ADD_TWEETS, payload: { tweets } })
