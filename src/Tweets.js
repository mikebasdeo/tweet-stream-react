//elegant redux
import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Tweet from './Tweet'

const Tweets = ({ tweets = [] }) => {
  useEffect(() => {
    console.log('hello sir')
  }, [])
  return (
    <section className="Tweets">
      {tweets.map((tweet) => (
        <Tweet key={tweet.id} tweet={tweet} />
      ))}
    </section>
  )
}

const mapStateToProps = ({ tweets }) => ({ tweets })
export default connect(mapStateToProps)(Tweets)
