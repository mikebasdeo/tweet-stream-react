import React from 'react'
import { connect } from 'react-redux'

const Tweet = ({ tweet }) => {
  return (
    <article className="Tweet">
      <header>
        <h2>{tweet.user.name} writes:</h2>
      </header>
      <p>{tweet.text}</p>
    </article>
  )
}

const mapStateToProps = ({ tweets }) => tweets

export default connect(mapStateToProps)(Tweet)
