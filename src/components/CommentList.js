import React from 'react'
import { connect } from 'react-redux'

const CommentList = ({comments}) =>
  <ul className="comment-list">
    {comments.map(comment =>
      <li key={comment}>{comment}</li>
    )}
  </ul>

const mapStateToProps = ({comments}) => ({comments})

export default connect(mapStateToProps)(CommentList)
